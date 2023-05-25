// Question 1
// Will the code below raise an error?
// Bonus:
let numbers = [1, 2, 3];
numbers[6] = 5;
//Bonus👇
numbers[4]; // what will this line return? My Answer => it returns the Primitive Value undefined

// [ 1, 2, 3, <3 empty items>, 5 ]
// My answer: No, it will add the ////Primitive Number////
// it will add EMPTY VALUES to the array where there are no elements up to the inserted index. BUT the empty values will return/log 'undefined'

/** Launch school answer: It doesn't raise an error. The JavaScript engine will treat array slots 3 through 5 as empty slots. 
 * Bonus Answer:
numbers[4] will output undefined, but the slot is empty -- it doesn't have a value, not even undefined, in spite of what the line returns. This distinction is important: if you use map(), for instance, the new array will also have empty slots in the corresponding positions. On the other hand, slots with a value of undefined will be remapped based on the return value of the callback:
 */

// numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
console.log(`numbers.map(() => 10)) logs:` + numbers.map(() => 10)); // => [ 10, 10, 10, <2 empty items>, 10, 10 ]

console.log(numbers[4] === undefined); // Will log 'true', because accessing uninitialized index returns 'undefined'
console.log(numbers[4] === null); // Will log 'false', because the slot does not contain the value 'null'
console.log(4 in numbers); // Will log 'false', because the index '4' is not initialized
/*
the <in> operator is used to check if a property exists in an object. Since arrays in JavaScript are a type of object, where the keys are the index positions, you can use the in operator to check if a certain index exists in the array.

The expression 4 in numbers checks whether the array numbers has an element at index 4. The in operator will return true if the index exists in the array, and false if it does not.
*/

console.log(`numbers array: ` + numbers); //=> numbers array: 1,2,3,,,,5
console.log(`value at index 0: ` + numbers[0]); //=> value at index 0: 1
console.log(`value at index 3: ` + numbers[3]); // value at index 3: undefined
console.log(`value at index 4: ` + numbers[4]); // value at index 4: undefined
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


Remember, in checks for the existence of the index (or property, in case of non-array objects), not the value of the element at that index. This is why it returns true for empty slots in an array.

You can also use in to check if properties exist in non-array objects:
let obj = { 'key1': 'value1', 'key2': 'value2' };
console.log('key1' in obj);  // Logs 'true'
console.log('key3' in obj);  // Logs 'false'
*/
