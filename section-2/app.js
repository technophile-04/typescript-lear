// ------------------------
// Union Type
// ------------------------
// resulConversion is of literal type
function add(input1, input2, resultConversion) {
    var result;
    // result = input1 + input2;
    // Error as the type of input1 and input2 are both number or string and typescript cannot makeout the type of the result or if its possible to use + operator there
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combined = add(10, 20, 'as-number');
console.log(combined);
var combined1 = add('10', '20', 'as-number');
console.log(combined1);
var combined2 = add('Shiv', 'Bhonde', 'as-string');
console.log(combined2);
