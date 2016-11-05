var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',

	function AppCtrl($scope, $http) {
		
		console.log("Hello World from controller");

		$http.get('/contato').success(function(response) {
			console.log('I got the data I requested')
			$scope.contactList = response;
		})

	}

]);