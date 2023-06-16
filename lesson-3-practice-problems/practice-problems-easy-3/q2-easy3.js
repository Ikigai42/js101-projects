/* Question 2
What will the following code output?
*/

console.log([1, 2, 3] + [4, 5]); //converts to String & then concatenates => 1, 2, 34, 5

/*Notes:
In some languages you can use + to concatenate two arrays, but not in JavaScript. In JavaScript, the + operator first converts the arrays to strings, and then concatenates the strings, so the output is the string 1,2,34,5.
*/
