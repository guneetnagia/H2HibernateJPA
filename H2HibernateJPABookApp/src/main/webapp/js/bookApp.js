(function(){
	"use strict";
	var myApp = angular.module("bookApp",["ui.router"]); 
	myApp.config(["$stateProvider","$urlRouterProvider",
	              	function($stateProvider,$urlRouterProvider){
		
		$urlRouterProvider.otherwise("/");
		
		$stateProvider
			.state('home',{
				url:"/",
				templateUrl:"../views/welcomeView.html",
			})
			.state('addBook',{
				url:"/addBook",
				templateUrl:"../views/addBook.html",
				//controller:""
			})
			.state('editBook',{
				url:"/editBook",
				templateUrl:"../views/editBook.html",
				//controller:""
			})
			.state('searchBook',{
				url:"/searchBook",
				templateUrl:"../views/findBook.html",
				//controller:""
			})
			.state('about',{
				url:"/aboutme",
				templateUrl:"../views/about.html",
			})
			.state('beerbreak',{
				url:"/break",
				templateUrl:"../views/break.html"
			})
	}]);
}());