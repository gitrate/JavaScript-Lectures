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














































