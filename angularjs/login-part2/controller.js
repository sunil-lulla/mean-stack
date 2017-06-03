var app = angular.module("LoginApp",["ngRoute"]);

app.config(["$routeProvider",function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl:'login.html'
	})
	.when('/dashboard',{
		resolve:{
			"check":function ($rootScope,$location) {
				if($rootScope.isLoggedIn != true){
					$location.path("/");
				}
			}
		},
		templateUrl:'dashboard.html'
	})
	.otherwise({
		redirectTo:"/"
	});
}]);

app.controller("LoginController",["$scope","$rootScope","$location",function ($scope,$rootScope,$location) {
	$scope.submit = function()
	{
		var uname = $scope.username;
		var password = $scope.password;
		if(uname=='admin' && password == 'admin')
		{
			$rootScope.isLoggedIn = true;
			$location.path("/dashboard");
		}
		else{
			alert("Wrong Stuff");
		}
	};
}])

