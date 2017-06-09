var application = angular.module("ServicesApp",[]);
application.factory("random",function () {
	factObject = {};
	var num = Math.floor(Math.random()*10);
	factObject.generate = function () {
		return num;
	}
	return factObject;
})

application.controller("ServicesController",function ($scope,random) {
	$scope.getRandom = function () {
		$scope.number = random.generate();	
	}

})