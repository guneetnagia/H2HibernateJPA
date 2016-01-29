(function(){
	"use strict";
	
	angular
		.module("commonServices")
		.factory("productResource",["$resource",productResourcefn]);
	
	function productResourcefn($resource){
		return $resource("/books/search");
	}
}());