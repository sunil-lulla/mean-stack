var app = angular.module("MainApp",["ngRoute"]);
app.config(["$routeProvider",function ($routeProvider) {
	$routeProvider
	.when('/',{
		template:"Welcome user!!."
	})
	.when('/contact',{
		template:"Thanks for contacting us"
	})
	.otherwise({
		redirectTo:'/'
	});
}]);