'use strict';

/**
 * @ngdoc function
 * @name molkkyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the molkkyApp
 */
angular.module('molkkyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
