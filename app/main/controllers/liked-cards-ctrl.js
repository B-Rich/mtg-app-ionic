'use strict';
angular.module('main')
    .controller('Liked-cardsCtrl', function ($log, $localForage, $scope, $ionicLoading) {

        $log.debug('Hello from your Controller: Liked-cardsCtrl in module main:. This is your controller:', this);

        var likedCards = $localForage.instance('likedCards');
        $scope.cards = [];

        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
            // duration: 1
        });

        function activateLikedCards () {
            $log.debug('Getting LikedCards');
            likedCards.keys().then(function (data) {

                    angular.forEach(data, function (value, key) {
                        likedCards.getItem(value).then(function (data) {

                            $scope.cards.push({key: value, value: data});
                            $log.debug($scope.cards);
                        });
                        // $scope.cards.push(likedCards.getItem(data[key]));
                    });
                    // $scope.cards = data;

                }
            );
            $ionicLoading.hide();
        }

        // activateLikedCards();

        $scope.$on("$ionicView.beforeEnter", function (event, data) {
            // handle event
            // $log.debug('~~~before enter');
            activateLikedCards();

        });

        $scope.delete = function (item, index) {

            console.log('2');
            likedCards.removeItem(item.key);
            $scope.cards.splice(index, 1);

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

    });
