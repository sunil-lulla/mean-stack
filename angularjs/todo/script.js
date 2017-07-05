var app = angular.module("todoApp",[]);

app.controller("todoController",function ($scope) {
	$scope.onSave = function(){
		console.log(event.which);
	}
})
