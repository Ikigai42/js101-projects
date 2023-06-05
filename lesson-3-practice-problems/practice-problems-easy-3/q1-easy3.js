/**Question 1
Write three different ways to remove all of the elements from the following array:
 */
let numbers = [1, 2, 3, 4];

// pop() removes from the end of the array
// shift() removes element from the beginning of the array
// splice() removes/adds elements from given start index, deleteCount, addElement1, newElement2

numbers.splice(0, numbers.length);

console.log(numbers);

let numbers2 = [1, 2, 3, 4];

while (numbers2.length > 0) {
  numbers2.pop();
}

console.log(numbers2);

let numbers3 = [1, 2, 3, 4];

numbers3.length = 0;

console.log(numbers3);
