// Lesson_22 **************************
// AngularJS

(function (){
	"use strict";
	angular.module("app", [
		"price"
	]).run(function($templateCache) {
		$templateCache.put('myTemplate.html', 'This is the<br/> content of the template');
	})
}) ();

// (function (){
	// "use strict";
	// angular.module("price",  [])
	// .filter("price", price);
	
	// function price(number, symbol) {
			// return (symbol || "$") + number;
		// }
// }) ();


(function (){
	"use strict";
	angular.module("price", [])
	.filter("price", price);
	
	function price() {
			return function (number, symbol) {
				return (symbol || "$") + number;
			};
	}
}) ();

(function() {
	"use strict";
	angular.module("app")
		.controller("myCtrl", myCtrl);
	
	
	myCtrl.$inject = ["$scope", "$filter", "$http", "$q", "$sce", "$templateCache"];
	function myCtrl($scope, $filter, $http, $q) {
		
		var myCtrl = this;
		myCtrl.price = $filter("price")(25, "#");
		myCtrl.serverData = {};
		myCtrl.userAction = "";
		myCterl.html = $sce.trustAsHtml("<h1>test text</h1>");
		
		myCtrl.askUser = askUser;
		
		$scope.$applyAsync(function() {
			myCtrl.serverData = {"myKey1": "asdasd"};
		})
		
		console.log($scope);
		
		$http
			.get("http://www.mocky.io/v2/58d4161a100000db0cd7a6b5")
			.then(function (data){
			myCtrl.serverData = data.data;
		});
		
		function ascUser() {
			myModal().then(function (userAnswer) {
				myCtrl.userAction = userAnswer;
			})
		}
		
		function myModal() {
			var deffered = $q.defer();
			setTimeout(function() {
				deffered.resolve("User click OK");
			}, 5000);
			return deffered.promice;
		}
	}
})();





































































































































































































































































































































































































































