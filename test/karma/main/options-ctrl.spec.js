'use strict';

describe('module: main, controller: OptionsCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var OptionsCtrl;
  beforeEach(inject(function ($controller) {
    OptionsCtrl = $controller('OptionsCtrl');
  }));

  it('should do something', function () {
    expect(!!OptionsCtrl).toBe(true);
  });

});
