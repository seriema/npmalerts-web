'use strict';

describe('Service: Subscription', function () {

	var MainSrvc, $httpBackend;

	// load the controller's module
	beforeEach(module('npmalerts'));

	// Initialize the controller and a mock scope
	beforeEach(inject(function (Subscription) {
		MainSrvc = Subscription;
	}));
	
	beforeEach(inject(function ($injector) {
		$httpBackend = $injector.get('$httpBackend');
		$httpBackend.when('PUT', 'http://npmalerts.herokuapp.com/api/subscriptions', { email: 'seriema@gmail.com', repo: 'http://github.com/seriema/npmalerts-web', patch: true }).respond({success: true});
		$httpBackend.when('DELETE', 'http://npmalerts.herokuapp.com/api/subscriptions?email=seriema@gmail.com&repo=http://github.com/seriema/npmalerts-web').respond({success: true});
	}));
	
	beforeEach(function () {
		window.ga = angular.noop;
	});

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});


	it('adds a subscriber', function() {
		$httpBackend.expectPUT('http://npmalerts.herokuapp.com/api/subscriptions');
		
		MainSrvc.add('seriema@gmail.com', 'http://github.com/seriema/npmalerts-web', true);
		
		$httpBackend.flush();
	});

	it('removes a subscriber', function() {
		$httpBackend.expectDELETE('http://npmalerts.herokuapp.com/api/subscriptions?email=seriema@gmail.com&repo=http://github.com/seriema/npmalerts-web');

		MainSrvc.remove('seriema@gmail.com', 'http://github.com/seriema/npmalerts-web');

		$httpBackend.flush();
	});
});