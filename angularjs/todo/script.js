var app = angular.module("todoApp",[]);

app.controller("todoController",function ($scope) {
	$scope.tasks = [];

	tasklist = localStorage["taskLists"];
	if(tasklist !== undefined){
		$scope.tasks = JSON.parse(tasklist);
	}

	$scope.onSave = function(){
		if ((event.which == 13 || event.keyCode == 13) && $scope.task != ""){
			$scope.addTask();
		}
	}
	$scope.addTask = function(){
		$scope.tasks.push({"task":$scope.task,"status":false});
		$scope.task = '';
		localStorage["taskLists"] = JSON.stringify($scope.tasks);
	}
	$scope.editTask = function(msg){
		for(i=0;i<$scope.tasks.length;i++){
			if($scope.tasks[i].task == msg){
				$scope.tasks[i].task = event.target.innerText;
			}
		}
		localStorage["taskLists"] = JSON.stringify($scope.tasks);
		event.target.contentEditable = event.target.contentEditable == "true"? "false":"true";
	}
	$scope.enterAgain = function(taskMsg){
		if ((event.which == 13 || event.keyCode == 13) && taskMsg != ""){
			$scope.editTask(taskMsg);
		}
		
	}
	$scope.taskMarked = function(taskMsg){
		for(i=0;i<$scope.tasks.length;i++){
			if($scope.tasks[i].task == taskMsg){
				$scope.tasks[i].status = $scope.tasks[i].status == true?true:false;
			}
		}
		localStorage["taskLists"] = JSON.stringify($scope.tasks);
	}

})
