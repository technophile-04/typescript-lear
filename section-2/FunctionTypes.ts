function add(n1: number, n2: number) {
	return n1 + n2;
}

function printResult(num: number) {
	console.log('Result: ' + num);
}
printResult(add(5, 12));

// --------------------------------
// Function Types
// --------------------------------
// (parameters) =>  return type
let combinedValues: (a: number, b: number) => number;
combinedValues = add;

// combinedValues = printResult;ERROR

// --------------------------------
// Callback Functions
// --------------------------------

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2;
	cb(result);
}

addAndHandle(5, 12, printResult);
