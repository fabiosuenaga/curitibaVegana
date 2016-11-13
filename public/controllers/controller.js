var myApp   = angular.module('myApp',[]);

myApp.controller('AppCtrl',['$scope','$http',

	function AppCtrl($scope, $http, uiGmapGoogleMapApi) {
		
		var refresh = function() {
			$http.get('/contato').success(function(response) {
				console.log('I got the data I requested')
				$scope.contactList = response;
				$scope.contact = "";
			});
		}

		refresh();

		// CRUD functions
		$scope.addContact = function() {
			console.log($scope.contact)
			$http.post('/contato', $scope.contact).success(function(response) {
				console.log(response)
				refresh();
			});
		}; 

		$scope.remove = function(id) {
			console.log(id);
			$scope.idSelectedContact = null;
			$scope.deselect = false;
			$http.delete('/contato/' + id).success(function(response) {
				refresh();
			});
		};

		$scope.edit = function(id) {
			console.log(id);
			$http.get('/contato/' + id).success(function(response) {
				$scope.contact = response;
			});
		};

		$scope.update = function() {
			console.log($scope.contact._id);
			$scope.idSelectedContact = null;
			$scope.deselect = false;
			$http.put('/contato/' + $scope.contact._id, $scope.contact).success(function(response){
				refresh();
			})
		};

		$scope.deselect = function() {
			$scope.contact = "";
			$scope.idSelectedContact = null;
			$scope.deselect = false;
		};

		$scope.idSelectedContact = null;
		$scope.deselect = null;
    	$scope.setSelected = function(idSelectedContact) {
       	$scope.idSelectedContact = idSelectedContact;

		if(idSelectedContact){
       		$scope.deselect = true;		
		}


    }

	}

]);

