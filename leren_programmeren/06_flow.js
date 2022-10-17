// IF ELSE

if (false) {
    console.log('if clause is true');
} else {
    console.log('if clause is false');
}

// ===

let stringOne = 'test1';
let stringTwo = 'test1';

if (stringOne === stringTwo) {
    console.log('stringOne is equal to stringTwo');
} else {
    console.log('stringOne is not equal to stringTwo');
}

console.log(1 === 1);
console.log(1 === '1');
console.log(1 == '1');

console.log(1 !== 1);
console.log(1 !== 2);
console.log(1 != '2');

console.log(1 < 2); // -> true
console.log(33 > 2); // -> true
console.log(2 <= 2); // -> true
console.log(33 >= 33); // -> true

let numberOne = 11;
let numberTwo = 11;
let numberThree = 3;

console.log(numberOne === numberTwo && numberOne === numberThree);
console.log(numberOne === numberTwo || numberTwo === numberThree);

// SWITCH
let numOne = 2;
let numTwo = 3;
let operator = 'plus';
let result;

switch (operator) {
    case 'min':
        result = numOne - numTwo;
        break;
    case 'add':
    case 'plus':
        result = numOne + numTwo;
        break;
    case 'multiply':
        result = numOne * numTwo;
        break;
    case 'divide':
        result = numOne / numTwo;
        break;
    default:
        result = 'Operator not found';
}
