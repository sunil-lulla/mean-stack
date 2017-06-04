var app = angular.module("PersonsApp",[]);
app.controller("PersonController",["$scope","$http",function ($scope,$http) {
	$http.get("/db.json")
	.then(function (response) {
		$scope.persons = response.data.records;
	})
}]);
