// CORE TYPES
// To add type assignment to the parameters of a function, use the type annotation syntax: (parameterName: parameterType)

// Typescript throws the (js)output even if there is error in the code but give compilation error

// The key difference is : Javascript uses dynamic typing(resolved at runtime) and Typescript uses static typing(set during development)

// In TypeScript, you work with types like string or number all the times.

// Important: It is string and number (etc.), NOT String, Number etc.

// The core primitive types in TypeScript are all lowercase!

//--------------------------------
// LECT 1
//--------------------------------
/* 
function add(a: number, b: number) {
	return a + b;
}

const num1 = '10';
const num2 = 20;

console.log(add(+num1, num2)); */

//--------------------------------
// LECT 2
//--------------------------------
/* function add(a: number, b: number, printRes: boolean, message: string) {
	if (printRes) {
		let res = a + b;
		console.log(message + res);
	} else {
		console.log('Error cannot add');
	}

	return a + b;
}

const num1 = 10;
const num2 = 20;
const printRes = true;
const resPhrase = 'Result is: ';

add(num1, num2, printRes, resPhrase); */

//--------------------------------
// LECT 3
//--------------------------------

function add(a: number, b: number, printRes: boolean, message: string) {
	if (printRes) {
		let res = a + b;
		console.log(message + res);
	} else {
		console.log('Error cannot add');
	}

	return a + b;
}

// const num1 = 10;

// This is redundant as typescript does a prettry good job of inferring the type
// let num1: number = 10;

let num1: number;
num1 = 5;
// num1 = 'Shiv Bhonde'; Error

const num2 = 20;
const printRes = true;
let resPhrase = 'Result is: ';
// Now here typescript and 'resPhrase' is of type string.
// resPhrase = 0; Error because resPhrase is of type string(Done by typescript)

add(num1, num2, printRes, resPhrase);
