'use strict';

angular.module('npmalerts', ['ngRoute', 'ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'SignUpCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
