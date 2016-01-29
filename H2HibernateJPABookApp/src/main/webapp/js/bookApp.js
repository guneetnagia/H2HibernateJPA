(function(){
	"use strict";
	var myApp = angular.module("bookApp",["commonServices","ui.router"]); 
	myApp.config(["$stateProvider","$urlRouterProvider",
	              	function($stateProvider,$urlRouterProvider){
		
		$urlRouterProvider.otherwise("/");
		
		$stateProvider
			.state('beerbreak',{
				url:"/break",
				templateUrl:"../views/break.html"
			})
			.state('home',{
				url:"/",
				templateUrl:"../views/welcomeView.html",
				controller:"welcomeViewCtrl as vm"
			})
			.state('addBook',{
				url:"/addBook",
				templateUrl:"../views/addBook.html"
				//controller:""
			})
			.state('editBook',{
				url:"/editBook/:id",
				templateUrl:"../views/editBook.html"
				//controller:""
			})
			.state('searchBook',{
				url:"/searchBook",
				templateUrl:"../views/findBook.html"
				//controller:""
			})
			.state('deleteBook',{
				url:"/searchBook/:bookId",
				templateUrl:"../views/deleteBook.html",
				controller:"DeleteBookCtrl as delvm"
			})
			.state('about',{
				url:"/aboutme",
				templateUrl:"../views/about.html"
			})
	}]);
}());