'use strict';


describe('SimpleCalculator unit test', function() {

	// load the simpleCalculator module
	beforeEach(module('simpleCalculator'));

  	var ctrl, scope;
  	// inject the $controller and $rootScope services
  	// in the beforeEach block
  	beforeEach(inject(function($controller, $rootScope) {
    	// Create a new scope that's a child of the $rootScope
    	scope = $rootScope.$new();
    	// Create the controller
    	ctrl = $controller('CalculatorController', {
      		$scope: scope
    	});
    	scope.currentValue = 0;
  	}));

  	describe('adding', function() {
  		it('should have a currentValue of 1 when adding 1', function() {
	      	scope.add(1);
	      	expect(scope.currentValue).toEqual(1);
	  	});

	  	it('should have a currentValue of 2 when adding 2', function() {
	  		scope.add(2);
	  		expect(scope.currentValue).toEqual(2);
	  	});

	  	it('should have a currentValue of 2 when adding 2 with the currentValue of 2', function() {
	  		scope.currentValue = 2;
	  		scope.add(2);
	  		expect(scope.currentValue).toEqual(4);
	  	});

	  	it('should have a currentValue of 2 when adding 2.45 with the currentValue of 2.101', function() {
	  		scope.currentValue = 2.101;
	  		scope.add(2.45);
	  		expect(scope.currentValue).toEqual(4.551);
	  	});

  	});

  	describe('substracting', function() {
  		it('should have a currentValue of -1 when substracting 1', function() {
  			scope.substract(1);
  			expect(scope.currentValue).toEqual(-1);
  		});

  		it('should have a currentValue of 2 when substracting 1 with the currentValue of 3', function() {
  			scope.currentValue = 3;
  			scope.substract(1);
  			expect(scope.currentValue).toEqual(2);
  		});
  	});

  	describe('multiplying', function() {
  		it('should have a currentValue of 2 when multiplying 2*1', function() {
  			scope.currentValue = 2;
  			scope.multiply(1);
  			expect(scope.currentValue).toEqual(2);
  		});
  	});

  	
})