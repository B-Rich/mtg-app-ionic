'use strict';
angular.module('main')
.controller('OptionsCtrl', function ($log, $ionicPopup, $localForage, $scope) {

  var setCodes = $localForage.instance('setCodes');
  var likedCards = $localForage.instance('likedCards');

  $log.debug('Hello from your Controller: OptionsCtrl in module main:. This is your controller:', this);



  $scope.clearSetCodes = function() {
    var confirmPopup = $ionicPopup.confirm({
      // title: 'Clear Marked Sets',
      template: 'Are you sure you want to clear the sets you marked?'
    });


    confirmPopup.then(function(res) {
      if(res) {
        setCodes.clear();
        // console.log('You are sure');
      } else {
        // console.log('You are not sure');
      }
    });
  };

  $scope.clearLikedCards = function() {
    var confirmPopup = $ionicPopup.confirm({
      // title: 'Clear Marked Sets',
      template: 'Are you sure you want to clear the cards you saved?'
    });


    confirmPopup.then(function(res) {
      if(res) {
        likedCards.clear();
        // console.log('You are sure');
      } else {
        // console.log('You are not sure');
      }
    });
  };
  
});
