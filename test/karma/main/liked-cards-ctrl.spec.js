'use strict';

describe('module: main, controller: Liked-cardsCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var Liked-cardsCtrl;
  beforeEach(inject(function ($controller) {
    Liked-cardsCtrl = $controller('Liked-cardsCtrl');
  }));

  it('should do something', function () {
    expect(!!Liked-cardsCtrl).toBe(true);
  });

});
