var app = angular.module("LoopApp",[]);

// app.config(["$routeProvider",function ($routeProvider) {
// 	$routeProvider
// 	.when('/',{
// 		templateUrl:'login.html'
// 	})
// 	.when('/dashboard',{
// 		resolve:{
// 			"check":function ($rootScope,$location) {
// 				if($rootScope.isLoggedIn != true){
// 					$location.path("/");
// 				}
// 			}
// 		},
// 		templateUrl:'dashboard.html'
// 	})
// 	.otherwise({
// 		redirectTo:"/"
// 	});
// }]);

app.controller("LoopController",["$scope",function ($scope) {	
	// range = 100;
	// myRange = [];
	// for(i=0;i<range;i++)
	// 	myRange.push(i);
	$scope.myRange = new Array(100);
}])

