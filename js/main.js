// Awaiting document loading;
$(document).ready(function () {
	console.log("Ready 1");
});

$(document).on("ready", function () {
	console.log("Ready 2");
});

$(function () {
	console.log("Ready 3");
})

// Navigation
var mainTitle = $("h1.mainTitle");
var spanText = $("span.text");

// api.jquery.com

// console.log(mainTitle.children);
// console.log(mainTitle.children("input"));
// console.log(mainTitle.parent());
// console.log(mainTitle.parent("div"));
// console.log(mainTitle.parents);
// console.log(mainTitle.parents("body"));
// console.log(mainTitle.find("*"));
// console.log(mainTitle.find(".text"));
// console.log(mainTitle.children);

// console.log(spanText.prev());
// console.log(spanText.prev("div"));
// console.log(spanText.next());
// console.log(spanText.next("input"));

// mainTitle.addClass("test");
// console.log(mainTitle.hasClass("test"));
// mainTitle.removeClass("test");
// console.log(mainTitle.hasClass("test"));
// mainTitle.toggleClass("test");

console.log($("img").attr("src"));