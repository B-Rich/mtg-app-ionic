'use strict';

describe('module: main, service: CreateLocalForage', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var CreateLocalForage;
  beforeEach(inject(function (_CreateLocalForage_) {
    CreateLocalForage = _CreateLocalForage_;
  }));

  it('should do something', function () {
    expect(!!CreateLocalForage).toBe(true);
  });

});
