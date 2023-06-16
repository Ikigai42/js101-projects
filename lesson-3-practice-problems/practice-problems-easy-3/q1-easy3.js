/**Question 1
Write three different ways to remove all of the elements from the following array:
 */

// Method 1 splice() removes/adds elements from given start index, deleteCount, addElement1, newElement2
// Method 2 pop() removes from the end of the array
// Method 3 use .length to reassign the number value 0 to the numbers variable
// Method 4 shift() removes element from the beginning of the array

// Method 1 splice() removes/adds elements from given start index, deleteCount, addElement1, newElement2
let numbers = [1, 2, 3, 4];

console.log(`before splice(): ` + numbers);
numbers.splice(0, numbers.length);
console.log(`after splice(): ` + numbers);

// Method 2 pop() removes from the end of the array
let numbers2 = [1, 2, 3, 4];

console.log(`before pop(): ` + numbers2);

while (numbers2.length > 0) {
  numbers2.pop();
}

console.log(`after pop(): ` + numbers2);

// Method 3 use .length to reassign the number value 0 to the numbers variable
let numbers3 = [1, 2, 3, 4];

console.log(`before .length reassignment: ` + numbers3);
numbers3.length = 0;
console.log(`after .length reassignment: ` + numbers3);

// Method 4 shift() removes element from the beginning of the array
let numbers4 = [1, 2, 3, 4];

console.log(`before .shift(): ` + numbers4);

while (numbers4.length > 0) {
  numbers4.shift();
}

console.log(`after .shift(): ` + numbers4);
