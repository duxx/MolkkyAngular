'use strict';

function DialogController($scope, $mdDialog, sharedProperties) {

	$scope.nameToChange = sharedProperties.getValue('name')	;
	
	$scope.hide = function() {
		$mdDialog.hide();
	};
	$scope.cancel = function() {
		$mdDialog.cancel();
	};
	$scope.answer = function(answer) {
		$mdDialog.hide(answer);
	};
}

/**
 * @ngdoc function
 * @name molkkyApp.controller:PlayCtrl
 * @description
 * # PlayCtrl
 * Controller of the molkkyApp
 */
angular.module('molkkyApp')
	.controller('PlayCtrl', function ($scope, $mdDialog, sharedProperties) {
		$scope.players = [];

		for(var i = 0; i < $scope.numPlayers; i++)
		{
			$scope.players.push({
				id: i,
				name: 'Player ' + i,
				playsInRound: 1,
				points: 0,
				last: 0,
				missed: 0
			});
		}

		$scope.set = function(points)
		{
			$scope.players[$scope.currentPlayer].points += points;
			$scope.players[$scope.currentPlayer].last = points;
			if(points === 0)
			{
				$scope.players[$scope.currentPlayer].missed += 1;
			}
		};

		$scope.changeName = function(ev, playerId)
		{
			sharedProperties.setValue('name', $scope.players[playerId].name);

			$mdDialog.show({
				controller: DialogController,
				templateUrl: 'views/dialog1.tmpl.html',
				targetEvent: ev
			})
			.then(function(answer) {
				if(answer.length > 0)
				{
					$scope.players[playerId].name = answer;
				}
			}, function() {
				//calcel
			});
		};
	});
	
