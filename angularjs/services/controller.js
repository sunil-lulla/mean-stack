var application = angular.module("ServicesApp",[]);
application.service("random",function () {
	var num = Math.floor(Math.random()*10);
	this.generate = function () {
		return num;
	}
})

application.controller("ServicesController",function ($scope,random) {
	$scope.getRandom = function () {
		$scope.number = random.generate();	
	}

})