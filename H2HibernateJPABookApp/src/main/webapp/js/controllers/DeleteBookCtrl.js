(function(){
	"user strict";
	angular
		.module("bookApp")
		.controller("DeleteBookCtrl",DeleteBookfn);
	function DeleteBookfn(){
		var vm=this;
		vm.id=id;
		alert(vm.id);
	}
}());