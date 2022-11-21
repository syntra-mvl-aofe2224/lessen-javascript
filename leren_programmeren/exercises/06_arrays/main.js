/**
 * Given an array, return the same array but make sure no value occurs more than once
 * @param {array} anArray
 * @return {array}
 */
function removeDoubles(anArray) {}

/**
 * Given an array of numbers, return the same array containing only even numbers
 * @param {number[]} anArray
 * @return {number[]}
 */
function onlyEven(anArray) {}

/**
 * Given an array of number, return the difference between the lowest and the highest numbers
 * @param {number[]} anArray
 * @return {number}
 */
function highLowDifference(anArray) {}

/**
 * Count the number of times [aNumber] is in the given array [anArray]
 * @param {number[]} anArray
 * @param {number} aNumber
 * @returns {number}
 */
function countNumber(anArray, aNumber) {}

/**
 * Sort an array from low to high, write the logic yourself
 * @param {number[]} anArray
 * @return {number[]}
 */
function sort(anArray) {}

/**
 * Reverse the string
 * Try to keep the same casing (if first letter is
 * uppercase, make sure it is still uppercase in the reversed word
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
  let strArray = str.split('');
  let reverseArray = [];
  console.log(strArray);
  
  for (let i = 0; i < strArray.length; i++) {
    reverseArray.unshift(strArray[i].toLowerCase());
  }
  
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === strArray[i].toUpperCase()) {
      reverseArray[i] = reverseArray[i].toUpperCase();
    }
  }
  
  return reverseArray.join('');
}

/**
 * Given two arrays of values, return an array with only the values that occur in both arrays
 * @param {array} anArray
 * @param {array} otherArray
 * @return {array}
 */
function findSimilars(anArray, otherArray) {}

/**
 * Given an array return an array with the same values but in a random order
 * @param anArray
 */
function scramble(anArray) {}

/**
 * Given two arrays, check if the second array (subArray) is a sublist of the first (bigArray)
 * @param {array} bigArray
 * @param {array} subArray
 * @return {boolean}
 */
function isSublist(bigArray, subArray) {}
