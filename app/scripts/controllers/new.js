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
		$scope.players = [1, 2, 3, 4, 5, 6, 7];
	});
