'use strict';

/**
 * @ngdoc overview
 * @name comingsoonWebTemplateApp
 * @description
 * # comingsoonWebTemplateApp
 *
 * Main module of the application.
 */
angular
  .module('comingsoonWebTemplateApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
