'use strict';

describe('Service: Subscription', function () {

	var MainSrvc, $httpBackend;
	
	var data = {
		email: 'seriema@gmail.com',
		repo: 'http://github.com/seriema/npmalerts-web',
		patch: true
	};

	var api = {
		put: 'http://npmalerts.herokuapp.com/api/subscriptions',
		del: 'http://npmalerts.herokuapp.com/api/subscriptions?email='+data.email+'&repo='+data.repo
	};

	// load the controller's module
	beforeEach(module('npmalerts'));

	// Initialize the controller and a mock scope
	beforeEach(inject(function (Subscription) {
		MainSrvc = Subscription;
	}));
	
	beforeEach(inject(function ($injector) {
		$httpBackend = $injector.get('$httpBackend');
		$httpBackend.when('PUT', api.put, { email: data.email, repo: data.repo, patch: data.patch }).respond({success: true});
		$httpBackend.when('DELETE', api.del).respond({success: true});
	}));
	
	beforeEach(function () {
		window.ga = angular.noop;
	});

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});


	it('adds a subscriber', function() {
		$httpBackend.expectPUT(api.put);
		
		MainSrvc.add(data.email, data.repo, data.patch);
		
		$httpBackend.flush();
	});

	it('removes a subscriber', function() {
		$httpBackend.expectDELETE(api.del);

		MainSrvc.remove(data.email, data.repo);

		$httpBackend.flush();
	});
});