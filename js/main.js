// 1. 
// function summ(x, y) {
	// return x + y;
// }

// console.log(summ(25, 10));
// console.log(summ(15, -50));
// console.log(summ(-10, 10.1));

// ************************************************
// 2. 
// function isPositive(x) {
	// return (typeof(x) === "number" && x > 0)
// }

// console.log(isPositive(25));
// console.log(isPositive("25"));
// console.log(isPositive(0));
// console.log(isPositive(-1));
// console.log(isPositive(0.1));

// ************************************************
// 3. 
// function toBoolean (x) {
	// return (!!x);
// }

// console.log(toBoolean(1));
// console.log(toBoolean(0));
// console.log(toBoolean("as"));
// console.log(toBoolean(""));
// console.log(toBoolean(null));
// console.log(toBoolean([]));
// console.log(toBoolean(undefined));

// ************************************************

// function greeting(name) {
	
	
	// if(typeof(name)=== "string" && name != ""){
	
		// return ("Hello, " + name);
	// }else {
		// return ("Wrong name!");
	// }
// }


// console.log(greeting("Sam"));


// ************************************************

// function square(x) {
	
	
	// if(typeof(x)=== "number"){
	
		// return ("Square x = " + x*x);
	// }else {
		// return ("Wrong x!");
	// }
// }


// console.log(square(2));
// console.log(square(""));
// console.log(square(null));
// console.log(square(0));
// console.log(square(-5));

// ************************************************
// ??????????????????????????????????????????????
// function powerOrNot(x) {
	
	// if(!x%2){
		// return x*x;
	// }
	// else if (!x%3) {
		// return x*x*x;
	// }
	// else {
		// return x;
	// }
// }

// console.log(powerOrNot(2));
// console.log(powerOrNot(3));
// console.log(powerOrNot(6));
// console.log(powerOrNot(5));

// вариант с тернарным оператором return x%2 == 0 ? x*x : x%3 == 0 ? x*x*x : x;
// ************************************************

// function getType(x) {
	// if(x != null && typeof(x) != "object") {
	// switch (typeof(x)) {
		// case "number":
			// return "number";
			// break;
		// case "string":
			// return "string";
			// break;
		// case "boolean":
			// return "boolean";
			// break;			
	// }
	// }else (x === null) {
		// return "null";
	// }
		// return "array";
// }

// console.log(getType(null));

// ************************************************

// function isTruePrimitive(x) {
	// if(typeof(x) != "object") {
		// return true;
	// }
	// return false;
// }

// console.log(isTruePrimitive("true"));

function isTruePrimitive(x) {
	return typeof(x) !== "object" && typeof(x) !== "function"  && !!x {

console.log(isTruePrimitive(""));
console.log(isTruePrimitive("tue"));
console.log(isTruePrimitive({}));
console.log(isTruePrimitive([]));
console.log(isTruePrimitive(function()));
console.log(isTruePrimitive(25));
console.log(isTruePrimitive(0));
console.log(isTruePrimitive(null));
console.log(isTruePrimitive(undefined));
console.log(isTruePrimitive(NaN));

// ************************************************

// x1,y1; x2,y2;
// L1 = sqr((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2)) // вычисление длины первой стороны треугольника

// L1 = sqr((x3-x4)*(x3-x4) + (y3-y4)*(y3-y4)) // вычисление длины второй стороны треугольника

// c = sqr(a*a + b*b)=
// =(sqr((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2)))*(sqr((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2))) + 

// + (sqr((x3-x4)*(x3-x4) + (y3-y4)*(y3-y4)))*(sqr((x3-x4)*(x3-x4) + (y3-y4)*(y3-y4)))

function getLenthOfHyp(x1, x2, x3, x4, y1, y2, y3, y4) {
	return (Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2)))*(Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2))) + 

+ (Math.sqrt((x3-x4)*(x3-x4) + (y3-y4)*(y3-y4)))*(Math.sqrt((x3-x4)*(x3-x4) + (y3-y4)*(y3-y4)));
}

// две точки должны быть с равными координатами: x1,x4 = 0, y1,y4 = 0; x2 = 5, y2 = 0; x3 = 0, y3 = 3.

console.log(getLenthOfHyp(0,5,0,0,0,0,3,0));
console.log(getLenthOfHyp());

// Math.pow - возведение в квадрат

// ************************************************

// function getLenthOfHyp(x1, x2, x3, x4, y1, y2, y3, y4) {
	// return (Math.sqrt(Math.pow(x1-x2) + Math.pow(y1-y2)))*(Math.sqrt(Math.pow(x1-x2) + Math.pow(y1-y2))) + 

// + (Math.sqrt(Math.pow(x3-x4) + Math.pow(y3-y4)))*(Math.sqrt(Math.pow(x3-x4) + Math.pow(y3-y4)));
// }

// 


// *********************************************

// function fn(){    //it is function//function declaration;
	
// }

//******************************************

// var object={}; // [], {}, function();

//******************************************

// object.method=function(){};//it is method;

//******************************************

// var functionX=function (){};//it is functional expresion;

//******************************************

// var functionY=function fnName (){;//it is name functional expresion;
	// if(true){
		// fnName();
	// }
// };

//******************************************

// var newFnName=new Function("x","return x");
// console.log(newFnName(256));

// (function(){
	// console.log("test1");
// })();

//******************************************

// var test=(function privateName(x){
	
	// if(x<10){
	// return	privateName(x+1);
		
	// }
	// return x;
// })(0);

// console.log(test);

//******************************************

// var arrayWithFunctions=[
// function(){return 0;},
// function(){return 1;},
// function(){return 2;},
// ];

//******************************************

// arrayWithFunctions.methodOfArray=function(){
	// return"I am a method";                       //объявление метода
// }
// console.log(arrayWithFunctions[1]());
// console.log(arrayWithFunctions.methodOfArray());

//******************************************

// function fnName(){
	// return "I am a function";
// }


// fnName.methodOfFunction=function(){
	// return "I am a method";
// }

// console.log(fnName());
// console.log(fnName.methodOfFunction());
// console.log(fnName['methodOfFunction']());

// console.log(fnName);

// var newFunction = fnName;
// console.log(fnName());
// console.log(fnName.methodOfFunction());
// console.log(fnName['methodOfFunction']());

// console.log(fnName);

// fnName = null;

// var obj={
	// x:10
// }
// console.log(obj.x);
// changeX(obj);
// function changeX(obj){
	// obj.x=25;
// }
// console.log(obj.x);

// var x=10;
// var y=x;
// console.log(x);
// x++;
// changeX(x);
// function changeX(test){
	// test=25;
// }
// console.log(x);
// console.log(y);

// var x=true?function(){return 25;}():false;
// console.log(x);

// var fn=x==25&&function(){return 50};
// console.log(fn);

// function test(number, name){
	// console.log(arguments);
	// console.log(number+=10);
	// console.log('hello',name);
	// var x=Array.apply(null,arguments);
	// console.log(x);
// }
// test(1,'ivan',2,null,[],265,'test');

// function getAllNulls(array){
	// if(!Array.isArray(array)){
		// throw('attribute array is not array'); //генератор ошибки
	// }
	// var nullsArray=[];
	// for(var i=0;i<array.length;i++){
		// if(array[i]===null){
			// nullsArray.push(array[i]);
		// }
	// }
	// return nullsArray;
// }
// console.log(getAllNulls([1,23,'asd',null,undefined,[1,2,null],{"null":null},null]);)

var word = "поросят";
var count = 12;
while (count > 0) {
    document.write(count + " " + word + " пошли купаться в море,<br>");
    document.write(count + " " + word + " резвились на просторе,<br>");
	count--;
	if(count > 0) {
		document.write("Один из них утоп, ему срубили гроб<br>");
		document.write("И вот результат - " + count + " " + word + "!" + "<br><br>");
	} else {
		document.write("Скучно одному, купил себе жену,<br>");
		count = prompt("Введите целое положительное число от 2 до 12:");
		for(;;) {
			if(count > 1 && count < 13 && count % 1 == 0) {
				document.write("И вот результат: " + count + " поросят!<br>");
				document.write("<br>***************************************<br>");
				break;
			}else {
				count = prompt("Ошибка ввода! Введите целое положительное число от 2 до 12:")
			}
		}

		
		document.write("<br>" + count + " поросят пошли купаться в море...");
		break;
	}
}


// ============= Home work ==================

// ================= 21 ==================
// 1)
// var x = "12";
// var y = 10.0;
// var z = 10.2;
// console.log(typeof x === "string" && y === 10 &&
//             typeof z === "number" && z >= y);

// 2)
// var x = "8";
// var y = 5.0;
// var z = "10";
// console.log(typeof x === "number" && typeof y === "number" &&
//             (x > 10 || x > y) && (z % 2 === 0 ));

// 3)
// var x = "10";
// var y = '200';
// var z = 10;
// console.log(typeof x === "number" &&
//             typeof y === "number" &&
//             typeof z === "number" &&
//             (x + y) % 10 === 0 &&
//             (x + y + z) * 2 / 3 > 100);

// 4)
// var y = 20;
// var z = 10;
// var x;
//
// if(typeof y === "number" && typeof z === "number") {
//     x = (y % 3 === 0 ? y : (z > y) ? z : z + y);
//     console.log(x);
// }else {
//
//   console.log("incorrect input");
// }


// 4b)

// var y = '20';
// var z = 10;
// var x = ( typeof y === "number" &&
//           typeof z === "number" &&
//           y % 3 === 0 ? y : (z > y) ? z : z + y);
//
// console.log(x);

// ================= 22 ==================

// 1)
// var x = "10";
// var y = '200';
// var z = 10;
//
// if(typeof y !== "number"){
//   x = y;
// }else if (typeof z !== "number") {
//   x = z;
// }else {
//   x = null;
// }
// console.log(x);

// 2)
// var x = "10";
// var y = '200';
// var z = 10;
//
// if(y !== false){
//   x = "true";
// }else{
//   x = z;
// }

// 3)
// var x;
// var y = 99;
// var z = "gh";
//
// switch (y) {
//   case 0:
//     x = y;
//     break;
//   case false:
//     x = y;
//     break;
//   case undefined:
//     x = y;
//     break;
//   case null:
//     x = y;
//     break;
//
//   default:
//     x = +z;
// }
// console.log(x + " - " +typeof x)


// 4)
// var x;
// var y = 99;
// var z = "gh";
//
// switch (y) {
//   case 0:
//   case false:
//   case undefined:
//   case null:
//     x = y;
//     break;
//
//   default:
//     x = +z;
// }
// console.log(x + " - " +typeof x)


// ================= 23 ==================

// 1 for)
// var trueArray = [];
// var arr = ["", "0", 0, true, undefined, null, NaN, 234, "ololo", -1, [], {}];
// var lengthArray = arr.length;
// for(var i = 0; i < lengthArray; i++){
//     if(arr[i]){
//         trueArray.push(arr[i]);
//     }
// }
// console.log("for = ", trueArray);
//
// // 1 while)
// var i = 0;
// var trueWhileArray = [];
// var arr = ["", "0", 0, true, undefined, null, NaN, 234, "ololo", -1, [], {}];
// var lengthArray = arr.length;
//
// while (i < arr.length) {
//     if(arr[i]){
//         trueWhileArray.push(arr[i]);
//     }
//     i++;
// }
// console.log("while = ", trueWhileArray);

// // 1 do - while
// var i = 0;
// var trueDoWhileArray = [];
// var arr = ["", "0", 0, true, undefined, null, NaN, 234, "ololo", -1, [], {}];
// var lengthArray = arr.length;
//
// do {
//   if(arr[i]){
//       trueDoWhileArray.push(arr[i]);
//   }
//   i++;
// } while (i < arr.length);
// console.log("do - while = ", trueDoWhileArray);
//
//
// // 2 for)
// var positiveArray = [];
// var arr = ["0", 0, undefined, 234, 15, -29, "-287", "", [1, 2, 3], {key: "value"}, "test", false];
// var lengthArray = arr.length;
//
// for(var i = 0; i < lengthArray; i++){
//     if((typeof arr[i] === "number" || !isNaN(parseFloat(arr[i]))) &&
//         arr[i] > 0 ){
//       positiveArray.push(arr[i]);
//     }
// }
//  console.log("for = ", positiveArray);


// // 2 while
// var i = 0;
// var positiveWhileArray = [];
// var arr = ["0", 0, undefined, 234, 15, -29, "-287", "", [1, 2, 3], {key: "value"}, "test", false];
// var lengthArray = arr.length;
//
// while (i<lengthArray) {
//     if((typeof arr[i] === "number" || !isNaN(parseFloat(arr[i]))) &&
//             arr[i] > 0 ){
//           positiveWhileArray.push(arr[i]);
//         }
//     i++;
// }
// console.log("for = ", positiveWhileArray);

// // 2 do-while
// var i = 0;
// var positiveDoWhileArray = [];
// var arr = ["0", 0, undefined, 234, 15, -29, "-287", "", [1, 2, 3], {key: "value"}, "test", false];
// var lengthArray = arr.length;
//
// do {
//     if((typeof arr[i] === "number" || !isNaN(parseFloat(arr[i]))) &&
//             arr[i] > 0 ){
//           positiveDoWhileArray.push(arr[i]);
//         }
//     i++;
// }while (i<lengthArray);
// console.log("for = ", positiveDoWhileArray);


// ================= 24 ==================

// // sample 1
// var baseArray = [];
// var newArray1 = [];
// var newArray2 = [];
// var newArray3 = [];
//
// for (var i = 1; i < 100; i++) {
//     baseArray.push(i);
// }
// var k =0;
// var lengthBaseArray = baseArray.length;
// while (k < lengthBaseArray) {
//     newArray1.push(baseArray[k]);
//     newArray2.push(baseArray[k+1]);
//     newArray3.push(baseArray[k+2]);
//     k += 3;
// }
//
// console.log(newArray1, newArray2, newArray3);


// // sample 2
// var baseArray = [];
// var newArray1 = [];
// var newArray2 = [];
// var newArray3 = [];
// var min = 1;
// var max = 99;
// var arraySize = 99;
//
// function compareNumbers(a, b){
//   return a-b;
// }
//
// for (var i = 0; i < arraySize; i++) {
//     baseArray.push(Math.floor(Math.random() * (max - min + 1) + min));
// }
// console.log("baseArray.length = ", baseArray.length);
// console.log("unsort Base Array : ", baseArray);
// baseArray.sort(compareNumbers);
//
// var k =0;
// while (k < arraySize) {
//     newArray1.push(baseArray[k]);
//     newArray2.push(baseArray[k+1]);
//     newArray3.push(baseArray[k+2]);
//     k += 3;
// }
//
// console.log("sort Base Array : ", baseArray);
// console.log(newArray1, newArray2, newArray3);























