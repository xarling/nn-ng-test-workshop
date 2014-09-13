

describe('SimpleCalculator', function() {

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
  	}));

  	it('should have a currentValue of 1 when adding 1', function() {
      	scope.add(1);
      	expect(scope.currentValue).toEqual(1);
  	});
})