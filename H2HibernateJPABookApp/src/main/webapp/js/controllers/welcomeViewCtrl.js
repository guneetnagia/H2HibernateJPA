(function(){
	"use strict";
	angular
		.module("bookApp")
		//method1
	/*	.controller("welcomeViewCtrl",welcomeViewfn);
	function welcomeViewfn($scope, $http){
		var vm=this;
		vm.title='Book List';
		vm.bookProduct=[
		                {"id":2,"name":"test2","author":"test2","price":3201},
						{"id":3,"name":"test3","author":"test3","price":4201},
						{"id":4,"name":"test4","author":"test4","price":5201},
						{"id":5,"name":"test5","author":"test5","price":7201},
						{"id":6,"name":"test6","author":"test6","price":9201},
						{"id":7,"name":"test7","author":"test7","price":2201}
					];
		
	}*/
	
	//method 2
	/*	.controller("welcomeViewCtrl",welcomeViewfn);
	function welcomeViewfn($scope, $http){
		var vm=this;
		vm.title='Book List';
		$http.get("/books/search")
			.then(function(response){
				vm.bookProduct=response.data;
		});
	}*/
	
	//method 3
		.controller("welcomeViewCtrl",["productResource",welcomeViewfn]);
	function welcomeViewfn(productResource){
		var vm=this;
		vm.title='Book List';
		productResource.query(function(data){
			vm.bookProduct=data;
		});
	}
}());