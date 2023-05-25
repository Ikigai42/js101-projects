// Question 1
// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

// [ 1, 2, 3, <3 empty items>, 5 ]
// My answer: No, it will add the Primitive Number value 5 at index 6. I believe it'll also add undefined to any empty index values without any current elements up to that index.

console.log(numbers[4] === undefined); // Will log 'true', because accessing uninitialized index returns 'undefined'
console.log(numbers[4] === null); // Will log 'false', because the slot does not contain the value 'null'
console.log(4 in numbers); // Will log 'false', because the index '4' is not initialized

console.log(`numbers array: ` + numbers); //=> numbers array: 1,2,3,,,,5
console.log(`value at index 0: ` + numbers[0]); //=> value at index 0: 1
console.log(`value at index 3: ` + numbers[3]); // value at index 3: undefined
console.log(`value at index 6: ` + numbers[6]); // value at index 6: 5

/*
The slots created in the array when you assign a value at an index that is larger than the current array length are considered 'empty' or 'uninitialized', not 'null' or 'undefined'.

An 'empty' or 'uninitialized' slot in a JavaScript array is not the same as one that holds the value 'null' or 'undefined'. In JavaScript, 'null' is an assignment value that represents no specific object value, and 'undefined' represents a variable that has been declared but has not been assigned a value.

If you try to access an uninitialized index in an array, JavaScript will return 'undefined', but this doesn't mean the slot contains the value 'undefined'. It simply means JavaScript couldn't find any value at that index.

Here's how you could check for each condition:
let numbers = [1, 2, 3];
numbers[6] = 5;

console.log(numbers[4] === undefined); // Will log 'true', because accessing uninitialized index returns 'undefined'
console.log(numbers[4] === null); // Will log 'false', because the slot does not contain the value 'null'
console.log(4 in numbers); // Will log 'false', because the index '4' is not initialized

*/
