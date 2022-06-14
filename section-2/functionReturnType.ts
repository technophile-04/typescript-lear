// Here the typescript will infer the return type of the function since both the arguments are of the same type.(number)
function add(n1: number, n2: number) {
	return n1 + n2;
}

// Inferring the return type of the function to void
function printResult(num: number) {
	console.log('Result: ' + num);
}

// you have have a return statement in the function but it is not returning anything so we have to mention undefined
function addAndHandle(n1: number, n2: number): undefined {
	const result = n1 + n2;
	return;
}

printResult(add(5, 12));
