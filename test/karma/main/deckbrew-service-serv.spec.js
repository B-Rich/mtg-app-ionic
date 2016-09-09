'use strict';

describe('module: main, service: DeckbrewService', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var DeckbrewService;
  beforeEach(inject(function (_DeckbrewService_) {
    DeckbrewService = _DeckbrewService_;
  }));

  it('should do something', function () {
    expect(!!DeckbrewService).toBe(true);
  });

});
