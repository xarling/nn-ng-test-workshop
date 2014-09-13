'use strict';

angular.module('simpleCalculator', []);


angular.module('simpleCalculator').controller('CalculatorController', ['$scope', function($scope) {

	$scope.currentValue = 0;
	
	$scope.add = function(value) {
		$scope.currentValue += value;
	};

	$scope.substract= function(value) {
		$scope.add(-value);
	}


}]);