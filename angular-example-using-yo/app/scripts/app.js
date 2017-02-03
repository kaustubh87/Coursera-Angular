'use strict';

/**
 * @ngdoc overview
 * @name angularExampleUsingYoApp
 * @description
 * # angularExampleUsingYoApp
 *
 * Main module of the application.
 */
angular
  .module('angularExampleUsingYoApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
