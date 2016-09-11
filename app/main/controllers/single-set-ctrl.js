'use strict';
angular.module('main')
    .controller('Single-setCtrl', function ($log, $scope, $stateParams, DeckbrewService, $q, $localForage, ionicToast, $ionicLoading) {

            $log.debug('1Hello from your Controller: Single-setCtrl in module main:. This is your controller:', this);

            // $scope.setCode = $stateParams.setCode;
            $scope.cards = [];
            $scope.page = 0;
            $scope.thereAreMoreCards = true;
            $scope.setTitle = $stateParams.setTitle;
            // $scope.finishedSet = $localForage.getItem($stateParams.setCode);

        $scope.setCode = $stateParams.setCode;
        // $scope.setCodeCAP = $stateParams.setCode.toUpperCase();

        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
            // duration: 1
        });



        var likedCards = $localForage.instance('likedCards');
            var setCodes = $localForage.instance('setCodes');

            // $scope.nums = [1, 2, 3, 4];
            // $scope.deta = [5, 6, 7];

            //used for disable checking
            // $scope.array = {};
            function activateSetCode () {
                setCodes.getItem($stateParams.setCode).then(function (data) {

                    $log.debug('teststs');
                    $log.debug(data);
                    $scope.finishedSet = data;
                    // $log.debug(data);
                    // $localForage.getItem('myName').then(function (data) {
                    //     $log.debug(data);
                    //     var myName = data;
                    // });

                });
            };

            activateSetCode();
            //OFF FOR NOW
            activateAPI();

            $scope.loadMore = function () {

                // //TODO: reAdded when putting back API
                if($scope.thereAreMoreCards) {
                    $scope.page++;
                    var g = getCardsFromService($scope.setCode, $scope.page).then(function (data) {
                        $log.debug('Requesting more cards');
                        $log.debug(data);
                        // // $log.debug(data.data);
                        $log.debug($scope.cards);
                        if(data.length > 0) {
                            $log.debug('Valid data');
                            // var result = result.concat(data);
                            // $scope.cards.push(data); //this just shows  1 card image

                            $scope.cards = $scope.cards.concat(data);

                            // $scope.cards = data.concat($scope.cards);
                            // $scope.cards.push(data);
                            // $scope.$digest();

                            // $scope.nums.push($scope.deta);

                            // $scope.nums += $scope.deta;
                            // $scope.$broadcast('scroll.infiniteScrollComplete');
                            $scope.$broadcast('scroll.infiniteScrollComplete');
                        } else {
                            $log.debug('No Data');
                            $scope.thereAreMoreCards = false;
                            $scope.$broadcast('scroll.infiniteScrollComplete');
                            // $scope.$broadcast('scroll.infiniteScrollComplete');

                        }
                        return;
                        // $scope.$broadcast('scroll.infiniteScrollComplete');

                    });
                }
                // $scope.thereAreMoreCards = false;

                // if(!$scope.yelp.isLoading && $scope.yelp.hasMore) {
                //     $scope.yelp.next().then(function () {
                //         $scope.$broadcast('scroll.infiniteScrollComplete');
                //     });
                // }
            };

            $scope.setFinished = function () {
                $log.debug('Clicked set finished!');
                // console.log($scope.finishedSet);
                setCodes.setItem($stateParams.setCode, true).then(function (data) {
                    // $log.debug(data);
                    // $localForage.getItem('myName').then(function (data) {
                    //     $log.debug(data);
                    //     var myName = data;
                    // });

                    $scope.finishedSet = true;
                });

            };

            // $scope.test = function (item) {
            //     console.log('test');
            //     $localForage.getItem(item).then(function(data) {
            //         if(null){
            //             return false;
            //         } else {
            //             return true;
            //         }
            //     });
            // };

            $scope.save = function (card) {
                console.log('1');

                // $localForage.setItem('123123', '123132222')
                //     .then(function (value, err) {
                //             // we got our value
                //             $log.debug('success');
                //             $log.debug(value);
                //             $log.debug(err);
                //         }
                //     ).catch(
                //     function (err) {
                //         $log.debug('error');
                //         $log.debug(err);
                //         // we got an error
                //     }
                // );
                likedCards.setItem(card.id, card).then(function (data) {
                    $log.debug(data);

                    //set ng-disabled to true
                    //TODO: add ng-disabled check update!
                    // $scope.nums[item].added = true;
                    // $scope.array[card] = true;
                    ionicToast.show('Card saved', 'bottom', false, 1000);

                    // $localForage.getItem(item).then(function(data) {
                    //     $log.debug(data);
                    //     // var myName = data;
                    // });
                });

            };

            $scope.share = function () {

                // likedCards.setItem('myName', 'Olivier Combe').then(function (data) {
                //     // $log.debug(data);
                //     likedCards.getItem('myName').then(function (data) {
                //         $log.debug(data);
                //         var myName = data;
                //     });
                // });

                // $log.debug($localForage.driver());
                // $log.debug($localForage.length());

            };




            // $scope.findImage = function (cardEditions)
            function findImage (cardEditions) {

                // $log.debug('findImagecalled');
                // $log.debug(cardEditions);
                var imageURL;
                for(var i = 0; i < cardEditions.length; i++) {

                    // $log.debug(cardEditions[i].set_id);
                    // $log.debug($stateParams.setCode);
                    if(cardEditions[i].set_id.toLowerCase() === $scope.setCode) {
                        imageURL = cardEditions[i].image_url;
                        break;
                    }
                }

                return imageURL;
            };

            function activateAPI () {

                //check if set was marked finished

                //fetch cards from API
                return getCardsFromService($scope.setCode, $scope.page).then(function (data) {
                    $log.debug('Activated Card Sets');
                    $scope.cards = data;
                    $ionicLoading.hide();
                });
            }

            function getCardsFromService (code, page) {
                return DeckbrewService.getCardsBySetandPage(code, page).then(function (data) {
                    $log.debug(data);
                    // $scope.cards = data;

                    //TODO: do proper mappinghere

                    var result = data.data;

                    angular.forEach(result, function (value, key) {
                        result[key].image = findImage(result[key].editions);
                        // $log.debug(result[key].image);
                    });

                    // data.data[0].image = findImage(data.data[0].editions);
                    // $log.debug(data.data[0].image);

                    // if(data.data ){
                    return result;
                    // } else {
                    //     return false;
                    // }
                    // return data;
                });
            }

        }
    );
