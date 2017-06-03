var app = angular.module("LoginApp",["ngRoute"]);

app.config(["$routeProvider",function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl:'login.html'
	})
	.when('/dashboard',{
		templateUrl:'dashboard.html'
	})
	.otherwise({
		redirectTo:'/'
	});
}]);

app.controller("LoginController",["$scope","$location",function ($scope,$location) {
	$scope.submit = function()
	{
		var uname = $scope.username;
		var password = $scope.password;
		alert(uname);
		alert(password);
		if(uname=='admin' && password == 'admin')
		{
			$location.path("/dashboard");
		}
		else{
			alert("Wrong Stuff");
		}
	};
}])