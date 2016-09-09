'use strict';
angular.module('main')
    .controller('All-setsCtrl', function ($scope, $log, CardSetsService, $localForage, $q) {

        $log.debug('Hello from your Controller: All-setsCtrl in module main:. This is your controller:', this);

        $scope.cardSets = [];

        // var setCodes = $localForage.createInstance({
        //     name: 'setCodes',
        //     driver: 'localStorageWrapper'
        // });
        //
        // var likedCards = $localForage.createInstance({
        //     name: 'likedCards',
        //     driver: 'localStorageWrapper'
        // });

        var setCodes = $localForage.instance('setCodes');
        // var likedCards = $localForage.instance('likedCards');

        activate();

        $scope.$watch('cardSets ', function () {
            $log.debug('WATCHING');
            activateSetCode();

            // for(var i=0; i<newArray.length; i++){
            //     populateData(newArray[i]);
            // }
        });

        $scope.test = function (item) {
            // console.log('test' + item);
            // var deferred = $q.defer();
            return setCodes.getItem(item).then(function (data) {
                // $log.debug(data);
                // $log.debug(data);

                console.log('test' + item + '--' + data);
                // $log.debug(data);
                return data;

                // if(data) {
                //     return true;
                // } else {
                //     return false;
                // }
            });

        };

        // $scope.$watch('$localForage', function () {
        //     $log.debug('hello');
        // })


        //used update the dom with ng-switch checks
        $scope.$on("$ionicView.beforeEnter", function(event, data){
            // handle event
            // $log.debug('~~~before enter');
            activateSetCode();

        });
        
        // $scope.$on("$ionicView.enter", function(event, data){
        //     // handle event
        //     $log.debug('~~~~hello enter');
        // });
        //
        function activate () {
            return getCards().then(function () {
                $log.debug('Activated Card Sets');
            });
        }

        function activateSetCode () {

            $log.debug('Activating SetCodes');
            angular.forEach($scope.cardSets, function (value, key) {
                // $log.debug($scope.cardSets);
                setCodes.getItem($scope.cardSets[key].setCode).then(function (data) {

                    // $log.debug('teststs');
                    // $log.debug(data);
                    if(data === true) {
                        $scope.cardSets[key].setExists = true;
                        // return true;
                    }
                    // else {
                    //     return false;
                    // }
                    // return data;
                    // $scope.finishedSet = data;
                    // $log.debug(data);
                    // $localForage.getItem('myName').then(function (data) {
                    //     $log.debug(data);
                    //     var myName = data;
                    // });

                });

            });
            // $scope.$digest();

        };

        function getCards () {
            return CardSetsService.getCards().then(function (data) {
                $scope.cardSets = data.data;
                return $scope.cardSets;
            });
        }

    });
