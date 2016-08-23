'use strict';

/**
 * @ngdoc overview
 * @name scalyrApp
 * @description
 * # scalyrApp
 *
 * Main module of the application.
 */
angular
  .module('scalyrApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
  });
