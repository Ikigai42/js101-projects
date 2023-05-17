/** Calculator Program:
 * 1) Greet the user
 * 2) Ask the user to Input the first number.
 * 3) Ask the user to Input the second number.
 * 4) Inform the user on the Calculators features (addition + subtraction - multiplication * or division /).
 * 5) Ask the user to Input what type of operation to perform on their two inputted numbers.
 * 6) If valid Input Perform the operation on the two inputted numbers that the user inputted. Else ask for valid Input.
 * 7) Display the Output to the terminal.
 * 8) Instruct the user how to run the program again
 */

//use the built-in Node function 'require' to look for the readline-sync (synchronous) library in the node_modules folder.
const readlineUserInput = require('readline-sync');

// 1) Greet the user
console.log('Welcome to a command-line Calculator program!');

// 2) Ask the user to Input the first number.
let userInputNumber1 = readlineUserInput.questionInt(
  'Please input the first number & press enter: '
);

// 3) Ask the user to Input the second number.
let userInputNumber2 = readlineUserInput.questionInt(
  'Please input the second number & press enter: '
);

// 4) Inform the user on the Calculators features (addition + subtraction - multiplication * or division /).
console.log(
  '\n**NOTE:👀 This calculator can perform 1 of 4 operations: (Add+ Subtract- Multiply* OR Divide/)**'
);

// 5) Ask the user to Input what type of operation to perform on their two inputted numbers.
console.log(
  'Choose the number cooresponding to the desired operation on your inputted numbers:\n👉1)Add + 👉2)Subtract - 👉3)Multiply * 👉4)Divide /'
);
let userChoosenOperation = readlineUserInput.question();

let operationOutput;

// 6) If valid Input, Perform the operation on the two inputted numbers that the user inputted. Else ask for valid Input.
if (userChoosenOperation == '1') {
  // 7) If Display the Output to the terminal.
  operationOutput = userInputNumber1 + userInputNumber2;
  console.log(
    `The result of ${userInputNumber1} + ${userInputNumber2} is: ${operationOutput} 🎉\n`
  );
} else if (userChoosenOperation == '2') {
  operationOutput = userInputNumber1 - userInputNumber2;
  console.log(
    `The result of ${userInputNumber1} - ${userInputNumber2} is: ${operationOutput} 🎉\n`
  );
} else if (userChoosenOperation == '3') {
  operationOutput = userInputNumber1 * userInputNumber2;
  console.log(
    `The result of ${userInputNumber1} * ${userInputNumber2} is: ${operationOutput} 🎉\n`
  );
} else if (userChoosenOperation == '4') {
  operationOutput = userInputNumber1 / userInputNumber2;
  console.log(
    `The result of ${userInputNumber1} / ${userInputNumber2} is: ${operationOutput} 🎉\n`
  );
}

// 8) Instruct the user how to run the program again
console.log(
  "That's all folks!😁 Run the program again to do another calculation.\n"
);
