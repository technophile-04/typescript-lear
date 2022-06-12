// ! -> symbol tells that it will never yield null
const button = document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

function add(num1: number, num2: number) {
	return num1 + num2;
}

/* Using Unary Operator (+)
The unary plus operator (+) precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already. */
button.addEventListener('click', function () {
	console.log(add(+input1.value, +input2.value));
});
