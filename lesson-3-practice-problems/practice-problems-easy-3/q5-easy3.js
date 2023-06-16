/**Question 5
The following function unnecessarily uses two return statements to return boolean values. Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?

Try to come up with at least two different solutions.

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}
 */
function isColorValidMethod1(color) {
  return color === 'blue' || color === 'green';
}
console.log('Method 1:');
console.log(isColorValidMethod1('blue'));
console.log(isColorValidMethod1('green'));
console.log(isColorValidMethod1('red'));

function isColorValidMethod2(color) {
  return !!(color === 'blue' || color === 'green');
}
console.log('Method 2:');
console.log(isColorValidMethod2('blue'));
console.log(isColorValidMethod2('green'));
console.log(isColorValidMethod2('red'));

const isColorValidArrow = (color) => color === 'blue' || color === 'green';

console.log('Arrow Method 3:');
console.log(isColorValidArrow('blue'));
console.log(isColorValidArrow('green'));
console.log(isColorValidArrow('red'));

const isColorValidIncludes = (color) => ['blue', 'green'].includes(color);

console.log('Includes Method 4:');
console.log(isColorValidIncludes('blue'));
console.log(isColorValidIncludes('green'));
console.log(isColorValidIncludes('red'));
