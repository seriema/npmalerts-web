'use strict';

describe('Controller: SignUpCtrl', function () {

  // load the controller's module
  beforeEach(module('npmalerts'));

  var MainCtrl,
    scope,
		watchButton;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('SignUpCtrl', {
      $scope: scope
    });
  }));


	it('fake test', function() {
// expect(scope.awesomeThings.length).toBe(3);
		expect(true).toBeTruthy();
	});
});