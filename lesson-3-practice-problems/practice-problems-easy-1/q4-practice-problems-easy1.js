/**Question 4
Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)
 */
let munstersDescription = 'the Munsters are CREEPY and Spooky.';
// => The munsters are creepy and spooky.
let strFirstCharCapitalized = munstersDescription.charAt(0).toUpperCase();
console.log(strFirstCharCapitalized);

let strOnlyFirstCharCapitalized =
  strFirstCharCapitalized + munstersDescription.toLowerCase().slice(1);
console.log(strOnlyFirstCharCapitalized);

//LS answer
let lsAnswer =
  munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

console.log(`LS answer: ` + lsAnswer);
