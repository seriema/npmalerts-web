angular.module('npmalerts')
	.controller('SignUpCtrl', function ($scope, $http, $location, Subscription) {
		$scope.alerts = [];

		$scope.email = ($location.search()).email;
		$scope.url = ($location.search()).repo;

		$scope.isAdding = !($scope.email && $scope.url);

		$scope.displayAlert = function(msg) {
			$scope.alerts.push({type: 'danger', msg: msg });
		};

		$scope.displaySuccess = function(msg) {
			$scope.alerts.push({type: 'success', msg: msg });
		};

		$scope.closeAlert = function(index) {
			$scope.alerts.splice(index, 1);
		};

		$scope.submit = function() {
			$scope.alerts = [];
			if ($scope.isAdding) {
				$scope.submitWatch();
			} else {
				$scope.submitUnwatch();
			}
		};

		$scope.submitWatch = function() {
			Subscription.add($scope.email, $scope.url, !!$scope.ignorePatches)
				.success(function(){
					$scope.url = '';
					$scope.displaySuccess('Done! Now when there\'s a new package version available we\'ll let you know.');
				})
				.error(function(data) {
					_.each(data.messages, $scope.displayAlert);
				});
		};

		$scope.submitUnwatch = function() {
			Subscription.remove($scope.email, $scope.url)
				.success(function(){
					$scope.url = '';
					$scope.displaySuccess('Done! You won\'t receive any more notifications about that project.');
				})
				.error(function(data) {
					_.each(data.messages, $scope.displayAlert);
				});
		};
	});