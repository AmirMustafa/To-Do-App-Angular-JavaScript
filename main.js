var app = angular.module("ToDo", []);							//ToDo named Module created

app.controller("todoController", ['$scope', function ($scope) {	//todoController named controller created
		$scope.todos = [										//array in which we will push data
			{'title': 'Build a To Do App', 'done': false}		//done is status which we are setting false
		];														//One data is entered by default

		$scope.addToDo = function () {							//This method is called on form submit (i.e. ng-submit)
			$scope.todos.push({'title': $scope.newTodo, 'done':false})	//newTodo is the ng-model in input
			$scope.newTodo = ''			//after entering data and press enter data inserted, but when we enter again => data inserted, the no. of time entered is pressed==>Therefore setting to empty
		}

		$scope.clearCompleted = function () {
			$scope.todos = $scope.todos.filter(function (item) {	//Using filter and passing some value to not set it
					return !item.done
			})
		}
}]);