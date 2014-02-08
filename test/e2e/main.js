'use strict';

describe('Sign up page', function () {

	var watchButton;

	beforeEach(function () {
		watchButton = element('.btn-primary');
	});

	it('should have Watch enabled by default', function() {
		expect(watchButton.attr('disabled')).toBeFalsy();
	});

	it('should enable Watch/Unwatch button', function() {
		input('#email').enter('banan@fluga.com');
		expect(watchButton.attr('disabled')).toBeTruthy();

		input('#url').enter('http://github.com');
		expect(watchButton.attr('disabled')).toBeFalsy();
	});
});
