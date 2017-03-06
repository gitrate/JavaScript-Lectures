// Awaiting document loading;
// Есть три способа дождаться, пока документ загрузится, если у нас нет defer (неразборчиво на ТЭ, над ЭЙ, на DAY, на THEY - лекция js_13, timing  1:51:00) Мы можем обернуть весь код в одну из этих записей ниже:

// $(document).ready(function () {
	// console.log("Ready 1");
// });

// $(document).on("ready", function () {
	// console.log("Ready 2");
// });

// $(function () {
	// console.log("Ready 3");
// });

// Navigation
var mainTitle = $("h1.mainTitle");
var spanText = $("span.text");

// api.jquery.com

// console.log(mainTitle.children());
// console.log(mainTitle.children("input"));
// console.log(mainTitle.parent());
// console.log(mainTitle.parent("div"));
// console.log(mainTitle.parents());
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
// console.log(mainTitle.hasClass("test"));

// console.log($("img").attr("src"));
// $("img").attr("src", "images/tasd.gif");
// $("img").removeAttr("src");

// console.log($("img").attr("src"));
// $("img").attr("src", "asd");
// $("img").removeProp("src");

// console.log(mainTitle.html());
// console.log(mainTitle[0].innerHTML);
// mainTitle.html("<div>text</div>");
// mainTitle[0].innerHTML = "<div>text</div>";
// console.log($("<div>text</div>"));

// var clickableButton = $("<div>clickable Button</div>")
		// .css("color", "red")
		// .on("click", function () {alert("asd")} );
		// mainTitle.find("span.text").html(clickableButton);

// console.log($("input").val());
// $("input").val("test");
// console.log($("input").val());












