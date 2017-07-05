var app = angular.module("todoApp",[]);

app.controller("todoController",function ($scope) {
	$scope.tasks = [];
	$scope.onSave = function(){
		if ((event.which == 13 || event.keyCode == 13) && $scope.task != ""){
			$scope.addTask();
		}
	}
	$scope.addTask = function(){
		$scope.tasks.push({"task":$scope.task,"status":false});
		$scope.task = '';
	}
})
