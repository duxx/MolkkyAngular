'use strict';

/**
 * @ngdoc function
 * @name molkkyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the molkkyApp
 */
angular.module('molkkyApp')
  .controller('NewCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
