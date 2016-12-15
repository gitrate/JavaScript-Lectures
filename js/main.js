// // console.log(2+2*2); //6

// console.log("2 + 2 =",2+2); //2
// console.log("5-3 =", 5-3); //2
// console.log("5*3 =",5*3); //15
// console.log("5%3 =",5%3); //15
// var x = 25;
// console.log("-x =", -x); //-25


// var y = 25;
// console.log("-y =", y);
// console.log("typeof y=", typeof y); // string

// операторы сравнения

// console.log("5>3 =", 5>3); // true
// console.log("5<3 =", 5<3); // true
// console.log("3>=3 =", 3>=3); // true
// console.log("3<=3 =",3<=3); // true
// console.log("5!='5' =", 5!='5'); // false
// console.log("5!=='5' =", 5!=='5'); // true
// console.log("null == undefined =", null == undefined); // true
// console.log("null === undefined =", null === undefined); // false

// логические операторы

// console.log(0 && 6); // false

// function test() {
	// console.log("test success");
// }

// console.log(true && test());
// console.log(true && test() && "test" && "end of ends list");
// console.log(false || 6); //6
// console.log(true || 6); //true
// console.log(false || "end" || 0); //"end"
// console.log("start" || true || 0); //"start"

// логическое не

// console.log(!0) // true
// console.log(!"") // true
// console.log("!\"true because contains text", !"true because contains text") // false
// console.log("!true", !true); // false
// console.log("I am a string and I want to be bool", !!"I'm a string and I want to be bool"); // true

// оператор запятая

// var x = (3,4,5);
// console.log(x); // 5

// var x = 10, y = 5, z = x + y;
// console.log(z); // 15
// console.log(undefined); 
// console.log(undefined + 25); // NaN
// console.log(NaN==NaN); // false
// console.log(NaN===NaN);  // false
// console.log(typeof NaN);  // number
// console.log("2*(2+3)=", 2*(2+3));  // 10

//операторы инкремента

// var x = 10;
// x++; // 10
// console.log(x); //11
// console.log(x++); //11

// var y = 10;
// y++; // 11
// console.log(y); //11
// console.log(++y); //12

// //операторы декремента

// var x = 10;
// x--; // 10
// console.log(x); //9
// console.log(x--); //9

// var y = 10;
// y--; // 10
// console.log(y); //9
// console.log(--y); //8

// // операторы сравнения
// console.log('x' > 'y'); //false
// console.log('x' > 'Y'); //true
// console.log('test' > 'tes'); //true
// console.log('test' > 'zes'); //false
// console.log('1' > '2'); //false
// console.log('12' > '2'); //false
// console.log(+'12' > +'2'); //false

// сравнение разных типов

// console.log('2' > 1); // true
// console.log('1.0' == 1); // true
// console.log(true == 1); // true
// console.log(false == 0); // true
// console.log(false == 0 && false == ""); // true
// console.log(false === 0 && false == ""); // false
// console.log(false == 0); // true

// сравнение значений null and undefined

// console.log(null == undefined); // true
// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null < 0); // false
// console.log(null >= 0); // true
// console.log(null <= 0); // true

// true = !"", !0, !false, !null, !undefined, !NaN, [], ()
// false = "", 0, false,  null,  undefined,  NaN


// // условный оператор if

// if (true) {
	// console.log(true);
// }

// if (true)
	// console.log("1");

// if (25 && 0 || "text")
	// console.log("Success?");

// для приоритетов скобки в помощь

// if () {
	
// }
// else {
	
// }

// var userName = "Vasya"
// if (userName == "Vasya") {
	// alert("Hello admin "+name);
// }
// else if (typeof userName == "string") {
	// alert("Hello user"+name);
// }
// else {
	// alert("You enter not a name");
// }

//  тернарный оператор

// if (10 > 15) {
	// var x = "test";
// } else {
	// var x = "rest";
// }

// var x = /* if */ 10 > 15 ? /* then */ "test" : /* else */ "rest";
// var y = /* if */ 10 < 15 ? /* then */ "test" : /* else */ "rest";
// console.log(x);
// console.log(y);

// var z = 10 < 15 ? "test" : true ? "last" : "best";
// console.log(z);

// switch case

// var x = "25";
// switch (x) {
	// case "text":
		// console.log("Action 1")
		// break;
	// case "lost":
		// console.log("Action 2");
		// break;
	// case true:
		// console.log("Action 3");
		// break;
	// default:
		// console.log("Default action");
// }
























































