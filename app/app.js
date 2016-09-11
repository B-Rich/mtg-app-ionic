'use strict';
angular.module('mtgApp', [
    // load your modules here
    'main', // starting with the main module
    'LocalForageModule',
    'ionic',
    // 'ngCordova'
    'ionic-toast'
]).config(['$localForageProvider', function ($localForageProvider) {
    // $localForageProvider.setNotify(true, true); // itemSet, itemRemove
    // var lf2 = $localForage.createInstance({
    //   name: '2nd',
    //   driver: 'localStorageWrapper'
    // });

}]).config(function ($logProvider, $compileProvider, $ionicConfigProvider) {
    //remember this for build
    if(true) {
        $logProvider.debugEnabled(false);
        $compileProvider.debugInfoEnabled(false);
        // $compileProvider.commentDirectivesEnabled(false);
        // $compileProvider.cssClassDirectivesEnabled(false);
        $ionicConfigProvider.scrolling.jsScrolling(false);
        $ionicConfigProvider.views.maxCache(5);
    }
});
// .run(['$localForage ', function ($localForage ) {
//
//     // var setCodes = $localForage.createInstance({
//     //     name: 'setCodes',
//     //     driver: 'localStorageWrapper'
//     // });
//     //
//     // var likedCards = $localForage.createInstance({
//     //     name: 'likedCards',
//     //     driver: 'localStorageWrapper'
//     // });
// }]);