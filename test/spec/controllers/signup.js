'use strict';

describe('Controller: SignUpCtrl', function () {

  // load the controller's module
  beforeEach(module('npmalerts'));

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		MainCtrl = $controller('SignUpCtrl', {
			$scope: scope
		});
	}));

	beforeEach(function() {
		this.addMatchers({

			toBeEmptyArray: function() {
				var actual = this.actual;
				var actualText = 
					Array.isArray(actual) ? 
						(actual.length === 0 ?
							"array" : "[" + actual + "]")
						: (typeof actual); // This might look weird, but detecting empty arrays is weird.

				var notText = this.isNot ? " not" : "";

				this.message = function () {
					return "Expected " + actualText + notText + " to be an empty array.";
				};

				return Array.isArray(actual) && actual.length === 0;
			}

		});
	});

  var MainCtrl,
    scope;


	it('fake test', function() {
// expect(scope.awesomeThings.length).toBe(3);
		expect(true).toBeTruthy();
	});
	
	it('should default to empty email', function() {
		expect(scope.email).toBeNull();
	});
	
	it('should default to empty repo url', function() {
		expect(scope.url).toBeNull();
	});

	it('should default to no alert boxes', function() {
		expect(scope.alerts).toBeEmptyArray();
	});

	it('should default to adding-state', function() {
		expect(scope.isAdding).toBeTruthy();
	});

	it('should add something to alerts when calling displayAlert', function() {
		scope.displayAlert('hej hopp');
		expect(scope.alerts).not.toBeEmptyArray();
	});

	it('should add something to alerts when calling displaySuccess', function() {
		scope.displaySuccess('hej hopp');
		expect(scope.alerts).not.toBeEmptyArray();
	});

	it('should have no alerts if one is created and then closed', function() {
		scope.displayAlert('hej hopp');
		scope.closeAlert(0);
		expect(scope.alerts).toBeEmptyArray();
	});
});