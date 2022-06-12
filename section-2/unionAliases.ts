// ------------------------
// Union Type
// ------------------------

// Type aliases
type Combinable = number | string;
type ConversionDescription = 'as-number' | 'as-string';

// resulConversion is of literal type
function add(
	input1: Combinable,
	input2: Combinable,
	resultConversion: ConversionDescription
) {
	let result: number | string;

	// result = input1 + input2;
	// Error as the type of input1 and input2 are both number or string and typescript cannot makeout the type of the result or if its possible to use + operator there

	if (
		(typeof input1 === 'number' && typeof input2 === 'number') ||
		resultConversion === 'as-number'
	) {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}

	return result;
}

const combined = add(10, 20, 'as-number');
console.log(combined);

const combined1 = add('10', '20', 'as-number');
console.log(combined1);

const combined2 = add('Shiv', 'Bhonde', 'as-string');
console.log(combined2);

/* Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

For example:

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
This allows you to avoid unnecessary repetition and manage types centrally.

For example, you can simplify this code:

function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
To:

type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
} */
