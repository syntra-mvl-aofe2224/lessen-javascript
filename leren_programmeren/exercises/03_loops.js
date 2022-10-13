///////////////
// EXERCISES //
///////////////

////// Sum Until \\\\\\
// Start counting and sum every number.
// Stop at [num]

function sumUntil(num) {}

////// Tests \\\\\\
console.log(sumUntil(4)); // > 10
console.log(sumUntil(6)); // > 21
console.log(sumUntil(70)); // > 2485

////// Max \\\\\\
/*
Return the highest number
 */
function max(numOne, numTwo) {}

////// Tests \\\\\\
console.log(max(2, 7)); // > 7
console.log(max(55, 3)); // 55
console.log(max(-44, 4)); // 4

////// Calculate \\\\\\
/*
Write a function that does the correct calculation
[operator] has following possible values:
'min', 'plus', 'multiply', 'divide'
 */

function calculate(operator, numOne, numTwo) {}

////// Tests \\\\\\
console.log(calculate('min', 5, 3)); // > 2
console.log(calculate('plus', 5, 3)); // > 8
console.log(calculate('multiply', 5, 3)); // > 15
console.log(calculate('divide', 6, 3)); // > 2

/////// Count Words \\\\\\
/*
Count all the words in [text]
 */

function countWords(text) {}

////// Tests \\\\\\
console.log(countWords('United suns, to the holodeck.')); // > 5
console.log(
    countWords(
        'When one traps bliss and joy, one is able to facilitate totality.',
    ),
); // > 12
console.log(countWords('Captains are the bung holes of the salty madness.')); // > 9
console.log(countWords(' Captains are the bung holes of the salty madness.')); // > 9
console.log(
    countWords(' Captains are the bung    holes of the salty madness.'),
); // > 9
console.log(
    countWords(' Captains are the bung    holes of the salty madness . '),
); // > 9

////// First Letters \\\\\\
/*
Return a string containing all the first letters of the words in [text]
 */

function firstLetters(text) {}

////// Tests \\\\\\
console.log(firstLetters('United suns, to the holodeck.')); // > 'Ustth'
console.log(
    firstLetters(
        'When one traps bliss and joy, one is able to facilitate totality.',
    ),
); // > 'Wotbajoiatft'
console.log(firstLetters('Captains are the bung holes of the salty madness.')); // > 'Catbhotsm'
console.log(firstLetters(' Captains are the bung holes of the salty madness.')); // > 'Catbhotsm'
console.log(
    firstLetters(' Captains are the bung    holes of the salty madness.'),
); // > 'Catbhotsm'
console.log(
    firstLetters(' Captains are the bung    holes of the salty madness . '),
); // > 'Catbhotsm'
