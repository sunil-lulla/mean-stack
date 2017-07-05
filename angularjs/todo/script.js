var app = angular.module("todoApp",[]);

app.controller("todoController",function ($scope) {
	$scope.onSave = function(){
		if (event.which == 13 || event.keyCode == 13){
			$scope.addTask();
		}
	}
	$scope.addTask = function(){
		alert("hey There");
	}
})
