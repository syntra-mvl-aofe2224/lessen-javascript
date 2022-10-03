// First exercises


function shoutHelloTo(name) {
  let shoutout = 'hello ' + name;
  return shoutout.toUpperCase();

  // return 'HELLO ' + name.toUpperCase();
}

console.log(
  shoutHelloTo('Blblabla')
); // -> 'HELLO KORNEEL'

function average(a,b,c,d) {
  return (a + b + c + d) / 4;
}

console.log(
  average(32,33,6,10) // -> 8
);

function capitalise(word) {
  let firstLetter = word.charAt(0);
  let otherLetters = word.substring(1);

  return firstLetter.toUpperCase() + otherLetters.toLowerCase();
}

console.log(
  capitalise('gert') // -> 'Gert'
);
console.log(
  capitalise('geRT') // -> 'Gert'
);
