'use strict';

/**
 * @ngdoc function
 * @name molkkyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the molkkyApp
 */
angular.module('molkkyApp')
	.controller('MainCtrl', function ($scope, $mdSidenav) {
		$scope.toggleSidenav = function(menuId) {
			$mdSidenav(menuId).toggle();
		};

		$scope.nimi = 'antti';

	});
