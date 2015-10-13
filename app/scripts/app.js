'use strict';

/**
 * @ngdoc overview
 * @name securityApp
 * @description
 * # securityApp
 *
 * Main module of the application.
 */
angular
  .module('securityApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/shop.html',
        controller: 'ShopCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/shop', {
        templateUrl: 'views/shop.html',
        controller: 'ShopCtrl',
        controllerAs: 'shop'
      })
      .when('/join', {
        templateUrl: 'views/join.html',
        controller: 'JoinCtrl',
        controllerAs: 'join'
      })
      .when('/comments', {
        templateUrl: 'views/comments.html',
        controller: 'CommentsCtrl',
        controllerAs: 'comments'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
