/* Question 6
Suppose we build an array like this:
*/

let flintstones = ['Fred', 'Wilma'];
flintstones.push(['Barney', 'Betty']);
flintstones.push(['Bambam', 'Pebbles']);
console.log(flintstones);
// This code will create a nested array that looks like this:
// flinstones > ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Create a new array that contains all of the above values, but in an un-nested format:
// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

//.concat(...[])
console.log([].concat(...flintstones)); // [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

let flintstonesReduced = flintstones.reduce((accumulator, element) => {
  return accumulator.concat(element);
}, []);

let flintstonesFlat = flintstones.flat();

let flintstonesForEach = [];

flintstones.forEach((element) => {
  flintstonesForEach = flintstonesForEach.concat(element);
});

console.log(flintstones);
console.log(
  'reduce() method: flintstones.reduce((accumulator, element) => { return accumulator.concat(element); }, []);'
);
console.log(flintstonesReduced);
console.log('flat() method: flintstones.flat()');
console.log(flintstonesFlat);
console.log(
  'forEach(): flintstones.forEach((element) => { flintstonesForEach = flintstonesForEach.concat(element); });'
);
console.log(flintstonesForEach);
