var app = angular.module("todoApp",[]);

app.controller("todoController",function ($scope) {
	$scope.tasks = [];
	$scope.onSave = function(){
		if ((event.which == 13 || event.keyCode == 13) && $scope.task != ""){
			$scope.addTask();
		}
	}
	$scope.addTask = function(){
		$scope.tasks.push($scope.task);
		$scope.task = '';
		console.log($scope.tasks); 
	}
})
