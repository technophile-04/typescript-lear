// ! -> symbol tells that it will never yield null
var button = document.querySelector('button');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
function add(num1, num2) {
    return num1 + num2;
}
/* Using Unary Operator (+)
The unary plus operator (+) precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already. */
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
