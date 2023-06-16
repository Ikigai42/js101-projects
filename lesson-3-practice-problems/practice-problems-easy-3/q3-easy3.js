/*Question 3
What will the following code output?
*/

let str1 = 'hello there'; //declares and initializes variable str1 to the String 'hello there'
let str2 = str1; //declares and initializes variable str2 to the current value of variable str1 => String 'hello there'
str2 = 'goodbye!'; //reassigns str2 to the String 'goodbye!'
console.log(str1); //logs the current value that str1 is assigned to => 'hello there'

console.log(str2); //logs the current value that str2 is assigned to => 'goodbye!'
