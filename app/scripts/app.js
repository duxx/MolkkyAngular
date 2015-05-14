'use strict';

/**
 * @ngdoc overview
 * @name molkkyApp
 * @description
 * # molkkyApp
 *
 * Main module of the application.
 */
angular
  .module('molkkyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/new', {
        templateUrl: 'views/new.html',
        controller: 'NewCtrl'
      })
      .when('/play', {
        templateUrl: 'views/play.html',
        controller: 'PlayCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('AppCtrl', function($scope, $mdSidenav) {
    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };

    $scope.currentPlayer = 1;
    $scope.currentPlayerName = 'Antti';
    $scope.numPlayers = 2;
  })
  .service('sharedProperties', function() {
    var hashtable = {};

    return {
      setValue: function(key, value) {
        hashtable[key] = value;
      },
      getValue: function(key) {
        return hashtable[key];
      }
    };
  });
