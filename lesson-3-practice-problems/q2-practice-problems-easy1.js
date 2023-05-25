/**
Question 2
How can you determine whether a given string ends with an exclamation mark (!)?
 */
let str1 = 'Come over here!'; // true
let str2 = "What's up, Doc?"; // false

// Return the last value of the string

// split the string into individual chars with the String method .split('') into an array of strings and use the Array method .pop() with a strict equality operator to check the last element's value.
str1Chars = str1.split('');
str2Chars = str2.split('');
console.log(str1Chars); /*=> [
  'C', 'o', 'm', 'e',
  ' ', 'o', 'v', 'e',
  'r', ' ', 'h', 'e',
  'r', 'e', '!'
]
*/
console.log(str1.charAt(str1.length - 1)); // returns last character

//Test => check with strict equality operator
console.log(str1Chars.pop() === '!'); // true

console.log(str2Chars);
console.log(str2Chars.pop() === '!'); // false

//LS answer
str1.endsWith('!'); // true
str2.endsWith('!'); // false
console.log('LS answer:');
console.log(`str1.endsWith('!') returns:` + str1.endsWith('!'));
console.log(`str2.endsWith('!') returns:` + str2.endsWith('!'));
