var personCardApp = angular.module('personCardApp',[]);

personCardApp.controller('personCtrl',function($scope,$http){

	$http.get("data/person.json")
	.then(
	function(asd){
		$scope.personObj=asd.data;
		$scope.msg="success";
	},
	function(error){
		$scope.msg="error";
	});

	$scope.addNewPerson=function(aPerson){
		$scope.personObj.push({firstName:aPerson.firstName,lastName:aPerson.lastName,gender:aPerson.gender,nationality:aPerson.nationality,age:aPerson.age});
		aPerson.firstName=null;
		aPerson.lastName=null;
		aPerson.gender=null;
		aPerson.nationality=null;
		aPerson.age=null;
	}
	$scope.deletePerson=function(aPerson){
		$scope.personObj.pop({firstName:aPerson.firstName,lastName:aPerson.lastName,gender:aPerson.gender,nationality:aPerson.nationality,age:aPerson.age});
		if ($scope.personObj.length==0) {
			$scope.msg="404 No data found";
		}
	}

	
});

// personCardApp.controller('personCtrl',function($scope,$http){
// 	$http.get("data/person.json")
// 	.success(function(bal){
// 		$scope.personObj=bal;
// 	});
	
