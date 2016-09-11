'use strict';
angular.module('main')
.controller('AboutCtrl', function ($log, $scope) {

  $log.debug('Hello from your Controller: AboutCtrl in module main:. This is your controller:', this);

  $scope.rateUs = function () {
    // if ($ionicPlatform.is('ios')) {
    //   window.open('itms-apps://itunes.apple.com/us/app/domainsicle-domain-name-search/id511364723?ls=1&mt=8'); // or itms://
    // } else
    // if ($ionicPlatform.is('android')) {
      window.open('market://details?id=ashik.project.mtg');
  }

});
