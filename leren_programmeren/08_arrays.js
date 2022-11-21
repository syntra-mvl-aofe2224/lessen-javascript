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
    console.log(arrayOne[i]);
}

for (let i in arrayOne) {
    console.log(arrayOne[i]);
}

// join()

// split()

// concat()

// .indexOf() / .lastIndexOf() / .includes()

// .reverse()

// typeof / isArray
