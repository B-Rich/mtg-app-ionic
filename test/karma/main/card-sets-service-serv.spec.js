'use strict';

describe('module: main, service: CardSetsService', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var CardSetsService;
  beforeEach(inject(function (_CardSetsService_) {
    CardSetsService = _CardSetsService_;
  }));

  it('should do something', function () {
    expect(!!CardSetsService).toBe(true);
  });

});
