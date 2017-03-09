// animations

var $anim1 = $(".animate1");
var $anim2 = $(".animate2");
var $anim3 = $(".animate3");

// *******************************************

// $anim.hide();
// $anim.hide(4000);

// $anim.hide(4000, function() {
	// $anim.show(1000);
// });

// $anim.("h1").on("click", function() {
	// $anim.toggle(1000);
// });



// $anim.("h1").on("click", function() {
	// $anim1.stop().toggle(1000);
	// $anim2.stop().toggle(1000);
	// $anim3.stop().toggle(1000);
	// $(this).fadeTo(500, 0.5, "swing", function(){
		// alert("complete");
	// });
// })
// *******************************************


// $anim2.slideUp().slideDown();
// $anim3.slideOut().fadeIn();

// $anim1.hide({
	// duration: 1000,
	// queue: true,
	// step: function(param1, param2, param3) {
		// console.log(param1, param2, param3);
	// },
	// done: function(promise) {
		// promise.then(function () {
			// console.log("All OK");
		// } ).done(function () {
			// console.log("All nice");
		// });
	// }
// })

// $anim1.fadeOut({
	// duration: 1000,
	// queue: true,
	// step: function(param1, param2) {
		// console.log(param2.prop, param2.now, param2.end);
	// },
	// done: function(promise) {
		// promise.then(function () {
			// console.log("All OK");
		// } ).done(function () {
			// console.log("All nice");
		// });
	// }
// })


// $anim1.animate({"width": "25%"}).fadeOut({
	// duration: 1000,
	// queue: true
	// }).slideUp({
		// duration:1000,
		// queue: true
// })

// $anim1.fadeOut({
	// duration: 1000,
	// queue: true
// }).slideUp({
	// duration: 1000,
	// queue: false
// })

// $anim3.css("position", "relative").animate({
	// width: "50%",
	// height: "100px",
	// left: "100px"
// }, 4000, "swing",  function () {
	// alert('complete');
// } )

// $("body").animate({
	// "scrollTop": 500
// })

// $anim3.delay(2000).fadeOut(1000);

// $anim3.delay(2000).fadeOut(1000).css("background", "red");

// $anim3.delay(2000).queue(function() {
	// $this.css("background", "red");
// }).fadeOut(1000);

// $anim3.delay(2000).queue(function() {
	// $(this).css("background", "red").dequeue();
// }).fadeOut(1000);

// $("h1").on("click", function () {
	// $anim3.css({"width": "100%", "height": "300px"});
	// $anim3.stop().animate({"height": "100px"}, 1000).animate({"width": "25%"},  1000);
// });

// $("h1").on("click", function () {
	// $anim3.css({"width": "100%", "height": "300px"});
	// $anim3.stop(true).animate({"height": "100px"}, 1000).animate({"width": "25%"},  1000);
// });

// $("h1").on("click", function () {
	// $anim3.css({"width": "100%", "height": "300px"});
	// $anim3.stop(true, true).animate({"height": "100px"}, 1000).animate({"width": "25%"},  1000);
// });

// $("h1").on("click", function () {
	// $anim3.css({"width": "100%", "height": "300px"});
	// $anim3.finish().animate({"height": "100px"}, 1000).animate({"width": "25%"},  1000);
// });

// ***************************************
// AJAX
// ***************************************

// http://www.mocky.io/

// $.ajax("http://www.mocky.io/v2/58c1960a110000c01663f035").done(function (response) {
	// alert(response);
// })

// JSON
/*
{
	"key": "value",
	"key2": "true"'
	"someKey" {
		"someInnerKey": 256
	},
	"array": [1,2,3]
}
*/

// XML
/*
<container>
	<key>value</key>
	<key2>true</key>
	<someKey>
		<someInnerKey></someInnerKey>
	</someKey>
	<array>
		<value>1</value>
		<value>2</value>
		<value>3</value>
	</array>
</container>
*/

// Query parameters
// http://www.mocky.io/v2/58c1960a110000c01663f035?param=value1&param2=value2#test

// /deleteSomeEntity/entityId
// /deleteSomeEntity?entityId=dfglkjssf807dse4r

// $.ajax({
	// url: "http://www.mocky.io/v2/58c1a2fd110000471863f07d"
// }).done(function(data) {
	// console.log(data);
// })

// console.log($.now());
// $.ajax({
	// url: "http://www.mocky.io/v2/58c1a2fd110000471863f07d",
	// async: false
// }).done(function(data) {
	// // console.log(data);
// })
// console.log($.now());
// $("h1").fadeOut(1000);

// console.log($.now());
// $.ajax({
	// url: "http://www.mocky.io/v2/58c1a2fd110000471863f07d",
	// async: false,
	// beforeSend: function(jqXHR, settings) {
		// console.log(jqXHR);
		// jqXHR.someCustomData = "text";
		// console.log(settings);
	// },
	// cache: true
// }).done(function(data, status, jqXHR) {
	// // console.log(data);
	// console.log(jqXHR);
// })
// console.log($.now());
// // $("h1").fadeOut(1000);

// success url: http://www.mocky.io/v2/58c1a2fd110000471863f07d
// error url: ????????????????????????????

$.ajax({
	url: "http://www.mocky.io/v2/58c1a2fd110000471863f07d",
	async: false,
	beforeSend: function(jqXHR, settings) {
		// console.log(jqXHR);
		// jqXHR.someCustomData = "text";
		// console.log(settings);
	},
	cache: true,
	complete: function (jqXHR, status) {
		console.log(jqXHR, status);
	},
	data: {
		key1: "value1",
		key2: "value2"
	},
	method: "POST",
	dataType: "text",
	error: function (jqXHR, errorStatus, errorText) {
		console.log(jqXHR, errorStatus, errorText);
	},
	global: true,
	headers: {
		"My-sample-header": "test"
	},
	statusCode: {
		200: function() {
			alert("All OK"),
		},
		404: function() {
			alert("Not found")
		}
	}
}).done(function(data, status, jqXHR) {
	// console.log(data);
	// console.log(jqXHR);
})
// console.log($.now());
// $("h1").fadeOut(1000);











































































































































































































































































































































































































