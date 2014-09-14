'use strict';

angular.module('calculator', ['lodash']);


angular.module('calculator').controller('CalculatorController', ['$scope', 'calculatorService', function($scope, calculatorService) {

	$scope.currentValue = 0;
	
	$scope.add = function(value) {
		$scope.currentValue = calculatorService.add($scope.currentValue, value);
	};

	$scope.substract= function(value) {
		$scope.currentValue = calculatorService.substract($scope.currentValue, value);
	};

	$scope.multiply = function(value) {
		$scope.currentValue *= value;
	};


}]);

angular.module('calculatorService').factory('calculatorService', ['_', function(_) {

	var add = function() {
		return _.reduce(arguments, sum);
	};

	var sum = function(value1, value2) {
		return value1 + value2;
	};

	var substract = function() {
		return _.reduce(arguments, minus);
	}

	var minus = function(value1, value2) {
		return value1 - value2;
	}


	return {
        add: add,
        substract: substrac      
    };
});

