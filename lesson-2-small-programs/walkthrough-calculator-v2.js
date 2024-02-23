// ask user for first number
// ask user for second number
// ask user for operation to perform on the two numbers
// perform the opeartion the user inputs
// display result of the operation

const readline = require('readline-sync'); //Allows user input

console.log('👋 Welcome to a basic Calculator!');

console.log('Enter first number:');
let number1 = readline.question();

console.log('Enter second number:');
let number2 = readline.question();

console.log(
  'What operation would you like to perform on the numbers?\n1) Add 2) Subtract 3) Multiply 4) Divide'
);
let operation = readline.question();

let output;
if (operation === '1') {
  // '1' represents addition
  output = Number(number1) + Number(number2);
} else if (operation === '2') {
  // '2' represents subtraction
  output = Number(number1) - Number(number2);
} else if (operation === '3') {
  // 3 represents multiplication
  output = Number(number1) * Number(number2);
} else if (operation === '4') {
  // 4 represents division
  output = Number(number1) / Number(number2);
}

console.log(`The result is: ${output}`);
