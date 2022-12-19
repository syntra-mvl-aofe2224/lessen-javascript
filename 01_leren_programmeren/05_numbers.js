// numbers

let aNumber = 8;

console.log(aNumber);

// Operators

console.log(8 + 9); // 17
console.log(8 - 13); // -5
console.log(4 * 4); // 16
console.log(8 / 2); // 4

console.log(9 % 3); // 0
console.log(13 % 3); // 1

// type coercion

console.log(8 + '9');

// string to number

let aNumberFromString = parseInt('9.9'); //-> 9
let otherNumberFromString = Number('10'); //-> 10
let floatFromString = Number('9.9'); //-> 9.9

console.log('Number', Number('34.9abc'));
console.log('ParseInt', parseInt('34.9abc'));
console.log('ParseFloat', parseFloat('34.9abc'));

console.log(aNumberFromString);
console.log(otherNumberFromString);

let numberNine = Number.parseInt('9');
console.log(8 + numberNine);

// number to string

let someNumber = 12;

console.log(someNumber.toString());

// NaN

console.log('test' / 3);

// if (Number.isNaN(number)) {
// test if number is NaN;
// }

// Infinity

console.log(-11 / 0);
