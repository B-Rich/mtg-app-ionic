'use strict';

describe('module: main, controller: Single-setCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var Single-setCtrl;
  beforeEach(inject(function ($controller) {
    Single-setCtrl = $controller('Single-setCtrl');
  }));

  it('should do something', function () {
    expect(!!Single-setCtrl).toBe(true);
  });

});
