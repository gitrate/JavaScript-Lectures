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
// 4.

// function greeting(name) {
	
	
	// if(typeof name === "string" && name){
	
		// return "Hello, " + name;
	// }else {
		// return "Wrong name!";
	// }
// }


// console.log(greeting("Sam"));


// ************************************************
// 5.

// function square(x) {
	// return typeof x === "number" && "Square x = " + x*x || "Wrong x!";
// }


// console.log(square(2));
// console.log(square(""));
// console.log(square(null));
// console.log(square(0));
// console.log(square(-5));

// ************************************************
// 6.

// function powerOrNot(x) {
	// // switch (true) {
		// // case x%2 === 0:
			// // return x*x;
		// // case x%3 === 0:
			// // return x*x*x;
		// // default:
			// // return x;
	// // }
	// // alternative deсision
	// return x%2 == 0 ? x*x : x%3 == 0 ? x*x*x : x;
// }

// console.log(powerOrNot(2));
// console.log(powerOrNot(3));
// console.log(powerOrNot(6)); //don't work second case x%3 === 0
// console.log(powerOrNot(5));

// ************************************************
// 7.

// function getType(x) {
	// switch (true) {
		// case x === null:
			// return "null";
		// case x != x:
			// return "NaN";
		// case Array.isArray(x):
			// return "array";
		// default:
			// return typeof x;
	// }
// }

// // var arr = [3, "df", true];

// console.log(getType(null));
// console.log(getType(NaN));
// console.log(getType([3, "df", true]));
// console.log(getType(undefined));
// console.log(getType(""));
// console.log(getType(5));
// console.log(getType("str"));
// console.log(getType(0));
// console.log(getType(function() {}));
// console.log(getType({}));


// ************************************************
// 8. wrong old version

// x1,y1; x2,y2;
// L1 = sqr((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2)) // вычисление длины первой стороны треугольника


// L2 = sqr((x2-x4)*(x3-x4) + (y3-y4)*(y3-y4)) // вычисление длины второй стороны треугольника

// c = sqr(a*a + b*b)=
// =(sqr((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2)))*(sqr((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2))) + 

// + (sqr((x3-x4)*(x3-x4) + (y3-y4)*(y3-y4)))*(sqr((x3-x4)*(x3-x4) + (y3-y4)*(y3-y4)))

// function getLenthOfHyp(x1, x2, x3, x4, y1, y2, y3, y4) {
	// return (Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2)))*(Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2))) + 

// + (Math.sqrt((x3-x4)*(x3-x4) + (y3-y4)*(y3-y4)))*(Math.sqrt((x3-x4)*(x3-x4) + (y3-y4)*(y3-y4)));
// }

// // две точки должны быть с равными координатами: x1,x4 = 0, y1,y4 = 0; x2 = 5, y2 = 0; x3 = 0, y3 = 3.

// console.log(getLenthOfHyp(0,5,0,0,0,0,3,0));
// console.log(getLenthOfHyp());

// Math.pow - возведение в квадрат
// *************************************************
// 8.
// var a,b,c,x1,x2,x3,y1,y2,y3;

// function getLenthOfHyp(x1,y1,x2,y2,x3,y3) {
	// a = Math.sqrt( Math.pow(x1-x2,2) + Math.pow(y1-y2,2) ); // 9 => 3 cathetus a calculation
	// b = Math.sqrt( Math.pow(x2-x3,2) + Math.pow(y2-y3,2) ); // 49 + 9 = 58 => 7.615... cathetus b calculation
	// c = Math.sqrt( Math.pow (a,2) + Math.pow(b,2) ); // 9 + 58 = 67 => 8.185... hypotenuse calculation
	// return c;
// }

// console.log(getLenthOfHyp(0, 0, 0, 3, 7, 0));

// ************************************************
// 9.

// function isTruePrimitive(x) {
	// return typeof x !== "object" && typeof x !== "function"  && !!x
// }

// console.log(isTruePrimitive(""));
// console.log(isTruePrimitive("tue"));
// console.log(isTruePrimitive({}));
// console.log(isTruePrimitive([]));
// console.log(isTruePrimitive(function() {}));
// console.log(isTruePrimitive(25));
// console.log(isTruePrimitive(0));
// console.log(isTruePrimitive(null));
// console.log(isTruePrimitive(undefined));
// console.log(isTruePrimitive(NaN));
// console.log(isTruePrimitive(true));

// ************************************************
// homework
// ************************************************


// 10.

// var x,y;

// function forSummator(x,y) {
	// var sum = 0;
	// if (typeof(x) === "number" && typeof(y) === "number" && x%1 == 0 && y%1 == 0 && x < y) {
		// for( x; x <= y; x++ ) {
			// sum = sum + x;
		// }
		// return sum;
	// } else if (typeof(x) === "number" && typeof(y) === "number" && x%1 == 0 && y%1 == 0 && x > y) {
		// for(x; x >= y; x--) {
			// sum = sum + x;
		// }
		// return sum;
	// } else if (x == y) {
		// return "x = y";
	// } else
		// return "wrong data";
// }

// console.log(forSummator((-5),5));
// console.log(forSummator(5,(-5)));
// console.log(forSummator(5,1));
// console.log(forSummator(1,5));
// console.log(forSummator(5,5));
// console.log(forSummator("w",5));
// ************************************************
// 10 classwork
// function forSummator(x,y) {
	// if(x === y) {
		// return x;
	// }
	// if(x > y) {
		// var temp = x;
		// x = y;
		// y = temp;
	// }
	// var result = 0;
	// for (x; x<=y; x++) {
		// result += x;
	// }
	// return result;
// }

// console.log(forSummator((-5),5));
// console.log(forSummator(5,(-5)));
// console.log(forSummator(5,1));
// console.log(forSummator(1,5));
// console.log(forSummator(5,5));
// console.log(forSummator("w",5));

// ************************************************
// 11.

// var x,y,z;
// //x - step, y - start, z - end

// function positiveMultiplier(x,y,z) {
	// if (typeof x === "number" && typeof y === "number" && typeof z === "number" && x > 0 ) {
		// var mult = 1;
		// var counter = 0;
			// for(y; y <=z; y=y+x) {
				// if(y > 0)
					// mult = mult * y;
					// counter++;
			// }
		// if (counter == 0) {
			// return "we don't multiply numbers";
		// } else
			// return mult;
	// }
// }

// console.log(positiveMultiplier(1,2,3));

// ************************************************
// 11 classwork

// function isPositive(x) {
	// return (typeof(x) === "number" && x > 0)
// }

// function positiveMultiplier(x,y,z) {
	// var result = true;
	// for(y; y<=z; y+=x){
		// if(isPositive(y))
			// result *= y;
	// }
	// return result === true ? 0 : result;
// }


// console.log(positiveMultiplier(1,-2,3));

// ************************************************

// 12.

// var arr = [3,6,3,8,7,-2];
// var arr = [];
// var arr = [true, "mit", null]
// var arr = 5;

// var sum = 0;
// var counter = 0;

// function arraySummator(x) {
	// if(Array.isArray(x) && x.length > 0) {
		// for (i = 0; i < x.length; i++) {
			// if(typeof (x[i]) === "number") {
				// sum = sum + x[i];
				// counter++;
			// }
		// }
		// if (counter == 0) {
			// return  "no numbers in array";
		// } else if (counter > 0) {
			// return sum;
		// }
	// } else if (Array.isArray(x) && x.length == 0) {
		// return "empty array";
	// } else
		// return "wrong data";

// }

// console.log(arraySummator(arr));
// ************************************************
// 12 classwork

// var array = [3,6,3,8,7,-2];
// var array = [];
// var array = [true, "mit", null]
// var array = 5;

// function arraySummator(array) {
	// if(!Array.isArray(array) || !array.length) {
		// return "Invalid data";
	// }
	// var result = 0;
	// for (var i = 0; i < array.length; i++) {
		// result += array[i];
	// }
	// return result;
// }

// console.log(arraySummator([1,2,3]));

// ************************************************
// 13.

// var arr = [3,6,3,8,7,-2,true, "mit", null];
// var arr = false;
// var str = "";

// function arrayToConcatString(x) {
	// if(Array.isArray(x) && x.length > 0) {
		// for (i = 0; i < x.length; i++) {
			// str = str + x[i];
			// }
			// return str;
	// } else if (Array.isArray(x) && x.length == 0) {
		// return "empty array";
	// } else
		// return "wrong data";

// }

// console.log(arrayToConcatString(arr));
// ************************************************
// 13 a classwork
// function arrayToConcatString(array) {
	// if(!Array.isArray(array)) {
		// return "Invalid data";
	// }
	// var result = '';
	// for(var i = 0; i < array.length; i++) {
		// if(typeof array[i] === "string") {
			// result += array[i];
		// }
	// }
	// return result || "empty array";
// }

// console.log(arrayToConcatString(["It's ", "a ", undefined, "string ", [], "array "]));
// ************************************************
// 13 b classwork
// function arrayToConcatString(array) {
	// if(!Array.isArray(array)) {
		// return "Invalid data";
	// }
	// var result = [];
	// for(var i = 0; i < array.length; i++) {
		// if(typeof array[i] === "string") {
			// result.push(array[i]);
		// }
	// }
	// return result.join(' ') || "empty array";
// }

// console.log(arrayToConcatString(["It's ", "a ", undefined, "string ", [], "array "]));

// ************************************************

// 14 classwork

function getPositionOfFive(matrix) {
	var stepCounter = 0;
	var position = "";
	
	outerFor: for (var i = 0; i < matrix.lenght; i++) {
		// stepCounter++;
		var outerElement = matrix[i];
		
		for (var k = 0; k < outerElement.lenght; k++) {
			stepCounter++;
			
			if (outerElement[k] === 5) {
				position = i + "," + k;
				break outerFor;
			}
		}
	}
	return "steps - " + stepCounter + "; position - " + position;
}

console.log(getPositionOfFive([[1,2,3],[4,5,6],[7,8,9]]));
// ************************************************
// 15 a.
// var arr = [3,6,3,8,7,-2,5,65,1,0,-3,-1,5];
// var newArr = [];
// var booleanArr = [];

// function getArrayOfOdds(x) {
	// if(Array.isArray(x) && x.length > 0) {
		// for (i=0; i < x.length; i++) {
			// booleanArr.push(true);
		// }
		// for (i=0; i < x.length; i++) {
			// for(j = i+1; j < x.length; j++) {
				// if (x[i] === x[j]) {
					// booleanArr[i] = false;
					// booleanArr[j] = false;
				// }
			// }
		// }
		// for (i=0, k=0; i < x.length; i++) {
			// if(booleanArr[i]) {
				// newArr[k] = arr[i];
				// k++;
			// }
		// }
		// return newArr;
	// }
	
// }

// console.log(getArrayOfOdds(arr));
// ************************************************
// 15 b
// var arr = [3,6,3,8,7,-2,5,65,1,0,-3,-1,5];
// var newArr = [];
// var booleanArr = [];

// function getArrayOfOdds(x) {
	// if(Array.isArray(x) && x.length > 0) {
		// for (i=0; i < x.length; i++) {
			// booleanArr.push(true);
		// }
		// for (i=0; i < x.length; i++) {
			// for(j = i+1; j < x.length; j++) {
				// if (x[i] === x[j]) {
					// booleanArr[i] = false;
					// booleanArr[j] = false;
				// }
			// }
		// }
		// for (i=0, k=0; i < x.length; i++) {
			// if(booleanArr[i]) {
				// newArr.push(arr[i]);
			// }
		// }
		// return newArr;
	// }
	
// }

// console.log(getArrayOfOdds(arr));
// ************************************************
// 16.
// var arr = [1,1];
// var summ = 1;

// function summOfFibonachi(x) {
	// for(i = 1; i <= x; i++) {
		// arr.push(arr[i-1] + arr[i]);
	// }
	// for(i = 1; i < x; i++) {
		// summ = summ + arr[i+ 1];
		// console.log("i = " + i + " arr[" + i + "] = " + arr[i] + " summ = " + summ + " arr: " + arr);
	// }
	// return summ;
// }

// console.log(summOfFibonachi(5));
// ************************************************
// 17.
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ************************************************
// 18.
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ************************************************














































// *****************************************************


// function pow(x,y) {
	// if(!y)
		// return 1;
	// z = z || x;
	// y--;
	// if (y > 0) {
		// z *= x;
		// return pow(x,y,z);
	// } else {
		// return z;
	// }
// }
// console.log(pow(2,2));

// ********************************
// function toOneDimension(array, newArray) {
	// newArray = newArray || [];
	// for( var i = 0; i < array.length; i++) {
		// if(Array.isArray(array[i])) {
			// toOneDimension(array[i], newArray);
		// } else {
			// newArray.push(array[i]);
		// }
	// }
	// return newArray;
// };

// console.log(toOneDimension(
// [
	// [1,2,3,
		// [5,6,7,
			// [23,24,56]
		// ]
	// ],
	// [4,5,6],
	// [7,8,9,
		// [45,67]
	// ]
// ], ["asd", "test"]));

// // ********************************
// var  x = 123; // 123
// var  x = 0xF; //15
// var  x = 5e3; // 5000
// var  x = 5e-3; // 0.005

// var infinity = Infinity;
// var nan = NaN;
// var number = 123;

// console.log(isFinite(infinity));
// console.log(isFinite(nan));
// console.log(isFinite(number));

// console.log(+"56"); // 56
// console.log(+""); // 0

// console.log(parseInt("12px")); // 12
// console.log(parseInt("")); // NaN
// console.log(parseFloat("10.5.5")); // 10.5
// console.log(parseFloat("as10.5")); // NaN

// console.log(parseInt("FF", 16)); // 255

// console.log(isNaN(12));
// console.log(isNaN(""));
// console.log(isNaN("25.5"));
// console.log(isNaN(null));
// console.log(isNaN(true));

// function isNumber(n) {
	// return !isNaN(parseFloat(n)) && isFinite(n);
// }

// console.log(isNaN(Infinity));

// console.log(Math.round(1.5)); // 2
// console.log(Math.round(1.4)); // 1
// console.log(Math.ceil(1.1)); // 2
// console.log(Math.floor(1.9)); // 1
// console.log(10.567.toFixed(2)); // "10.57"
// console.log(Math.round(10.255 * 100) / 100); // 10 26

// var x = 0.1 + 0.2; // 0.30000000004
// console.log(x); // 0.30000000004
// console.log((0.1 * 10 + 0.2 * 10)/10); // 0.3
// console.log(+(0.1 + 0.2).toFixed(10)); // 0.3
// console.log(Math.round((0.1 + 0.2)*10)/10); // 0.3
// console.log(99999999999999999999);

// *******************************************************

// var string = "str\"ing";
// var string = 'string';
// var string = 'it\'s test string';

// console.log("First line \n next line");
// console.log("\\");

// console.log("test       ".length); // 11
// console.log("test".charAt(0)); // "t"
// console.log("test".charAt(5)); // ""
// console.log("test"[0]); // "t"
// console.log("test"[5]); // undefined

// var x = "A and B";

// console.log("A and B".toUpperCase()); // "A AND B"
// console.log("A and B".toLowerCase()); // "a and b"
// console.log(x);

// x = x.toLowerCase(); // we replace string with new in variable
// console.log(x); // and have ne string in variable

// var string = "test string";
// console.log(string.substring(1,5)); // "est"
// console.log(string.slice(1,5)); // "est"
// console.log(string.substr(1,5)); // "est "

// console.log(string.substring(5,1)); // "est"
// console.log(string.slice(5,1)); // ""

// console.log(string.substring(5,-1)); // "test"
// console.log(string.slice(5,-1)); // "strin"
// console.log(string.slice(-5,-1)); // "strin"


// var string = "test string";
// console.log(string.indexOf("t")); // 0
// console.log(string.lastIndexOf("t")); // 6

// console.log(string.indexOf("est")); // 1
// console.log(string.lastIndexOf("ing")); // 8

// var x = ~25; // ~(25+1) 26
// console.log(x);

// var x = ~-10; // ~(?) 9
// console.log(x);

// console.log(~-1); // 0
// console.log(~0); // -1

// var x = "some string";

// console.log(~string.indexOf("t"));
// console.log(~string.indexOf("rest"));

// if(~string.indexOf(x)) {
	// console.log("string has variable x");
// }

// if(string.indexOf(x) !== -1) {
	// console.log("string has variable x");
// }














































