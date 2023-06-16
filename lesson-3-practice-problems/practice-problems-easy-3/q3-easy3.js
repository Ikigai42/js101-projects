/*Question 3
What will the following code output?
*/

let str1 = 'hello there'; //declares and initializes variable str1 to the String 'hello there'
let str2 = str1; //declares and initializes variable str2 to the current value of variable str1 => String 'hello there'
str2 = 'goodbye!'; //reassigns str2 to the String 'goodbye!'
console.log(str1); //logs the current value that str1 is assigned to => 'hello there'

console.log(str2); //logs the current value that str2 is assigned to => 'goodbye!'

/**Notes:
The output is hello there since we are dealing with strings. In JavaScript, strings are primitive values and are immutable; they can't be changed. That also means that JavaScript creates a new copy of the string when assigning a string to a variable. Thus, line 2 assigns str2 a new string that happens to be a copy of str1's value. Line 3, in turn, assigns str2 to an entirely new string.
 */
