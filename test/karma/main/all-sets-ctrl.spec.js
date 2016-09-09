'use strict';

describe('module: main, controller: All-setsCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var All-setsCtrl;
  beforeEach(inject(function ($controller) {
    All-setsCtrl = $controller('All-setsCtrl');
  }));

  it('should do something', function () {
    expect(!!All-setsCtrl).toBe(true);
  });

});
