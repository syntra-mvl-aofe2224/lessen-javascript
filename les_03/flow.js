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

// Exercises

// return 'adult' if the age is higher than 17
// return 'child' if the age is lower then 18
function adultOrNot(age) {

}

console.log(adultOrNot(15)); // -> 'child'

// return 'what a long name' when the name is longer than 8 characters
// return 'what a sad short name' when the name is shorter than 9 characters
function longName(name) {

}

console.log(longName('Korneel')); // -> 'what a sad short name'

// return 'odd' when number is odd
// return 'even' when number is even
function oddOrEven(number) {

}

console.log(oddOrEven(44)); // -> 'even'

// return 'tof [word]' when the word rimes with tof
// return 'that doesn't rime' when it does not
function rimesWithTof(word) {

}

console.log(rimesWithTof('plof')); // -> 'tof plof'
console.log(rimesWithTof('boem')); // -> "that doesn't rime" || 'that doesn\'t rime'


// return true if word is already capitalised
// return false if it is not
function isCapitalised(word) {

}

console.log(isCapitalised('Gert')); // -> true
console.log(isCapitalised('gert')); // -> false
