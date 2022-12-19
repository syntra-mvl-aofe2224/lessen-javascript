// Arrays

let anArray = ['Iets', 1, true, 5, 4, 8];
let otherArray = new Array('Anders', 44, true);

// Get value from array

// console.log(anArray[2]); //-> true

// Overwrite value from array

// console.log(anArray);
anArray[1] = 2;
// console.log(anArray);

// length

// console.log(anArray.length);

// anArray[10] = 'test';
// console.log(anArray.length);

// pop, push
// console.log(anArray);
anArray.pop();
// console.log('pop', anArray);

anArray.push('New last val');
// console.log('push', anArray);

// shift, unshift
anArray.shift();
// console.log('shift', anArray);

anArray.unshift('New first val');
// console.log('unshift', anArray);

// slice, splice

// console.log('slice', anArray.slice(1, 4));
// console.log(anArray);

// anArray.splice(3, 2);
// console.log('splice', anArray);

// anArray.splice(1, 1, 5, 5, 5);
// console.log('splice', anArray);

// By reference

let aNumber = 2;
let otherNumber = aNumber;

aNumber++;
console.log('aNumber', aNumber); //-> 3
console.log('otherNumber', otherNumber); //-> 2

let arrayOne = [1, 2, 3];
let arrayTwo = arrayOne;

arrayOne.push(4);
console.log('arrayOne', arrayOne);
console.log('arrayTwo', arrayTwo);

// compare

// loops

for (let i = 0; i < arrayOne.length; i++) {
    // console.log(arrayOne[i]);
}

for (let i in arrayOne) {
    // console.log(arrayOne[i]);
}

// join()

let stringArray = ['Hello', 'world'];
// console.log(stringArray.join(' '));

// split()
let aString = 'Hello everybody, welcome!';
// console.log(aString.split(' '));

// concat()

let arrA = [3, 5, 7, 9, 7];
let arrB = [2, 4, 6, 8];

let longArr = arrA.concat(arrB);
//
// console.log(longArr);
// console.log(arrA);
// console.log(arrB);

// .indexOf() / .lastIndexOf() / .includes()
let firstSeven = longArr.indexOf(7);
let seconSeven = longArr.indexOf(7, firstSeven + 1);
// console.log(firstSeven);
// console.log(seconSeven);
// console.log(longArr.lastIndexOf(7));
// console.log(longArr.indexOf(11));
// console.log(longArr.includes(11));

// .reverse()

// console.log(longArr.reverse());
// console.log(longArr);

// typeof / isArray

console.log(typeof 78);
console.log(typeof 'string');
console.log(typeof [1, 2, 3]);
console.log(Array.isArray([1, 2, 3]));

// compare arrays

let firstArray = [1, 2, 3];
let secondArray = [1, 2, 3];
let thirdArray = firstArray;

console.log(firstArray, secondArray, thirdArray);

console.log(firstArray === thirdArray);
