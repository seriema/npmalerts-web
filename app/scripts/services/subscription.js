angular.module('npmalerts')
	.service('Subscription', function ($http) {
		return {
			add: function (email, repo, ignorePatches) {
				var data = { email: email, repo: repo, patch: !!ignorePatches };
				var promise = $http.put('/api/subscriptions', data);

				promise.success(function () {
					ga('send', 'event', 'subscriptions', 'signup', email);
				});
				promise.error(function () {
					ga('send', 'exception', { 'exDescription': 'SignupError' });
				});

				return promise;
			},

			remove: function (email, repo) {
				var promise = $http.delete('/api/subscriptions?email=' + email + '&repo=' + repo);
				promise.success(function () {
					ga('send', 'event', 'subscriptions', 'remove', email);
				});
				promise.error(function () {
					ga('send', 'exception', { 'exDescription': 'RemoveSubscriptionError' });
				});

				return promise;
			}
		};
	});