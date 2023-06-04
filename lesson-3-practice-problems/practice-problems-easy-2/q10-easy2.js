/**Question 10
Write a one-line expression to count the number of lower-case 't' characters in each of the following strings:
*/
let statement1 = 'The Flintstones Rock!';
let statement2 = 'Easy come, easy go.';
let charToCount = 't';

console.log(statement1.split('').filter((char) => char === 't').length);
console.log(statement2.split('').filter((char) => char === 't').length);

let countChars = (statement1 + statement2)
  .split('')
  .filter((element) => element === 't').length;

console.log(countChars);
