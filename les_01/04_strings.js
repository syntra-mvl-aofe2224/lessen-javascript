// Strings

let someString = 'Word Two Three';
let otherString = 'Four';

let longString = someString + ' ' + otherString;

let upperLongString = longString.toUpperCase();
let lowerLongString = longString.toLowerCase();

// let firstLetter = longString.charAt(0);
let firstLetter = longString[0];

let lastLetter = longString[longString.length - 1];

console.log(longString);
console.log(longString.length);
console.log(upperLongString);
console.log(lowerLongString);
console.log(firstLetter);
console.log(lastLetter);

// substring

let aString = 'Contactlenzen';

aString.substring(0,7); // 'Contact';
aString.substring(7); // 'lenzen';
