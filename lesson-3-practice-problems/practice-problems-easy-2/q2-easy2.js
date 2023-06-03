/*
Question 2
The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
*/
let numbers = [1, 2, 3, 4, 5];
console.log(`numbers: ` + numbers);

let numbersReversed = numbers.slice(0).reverse();

let numbersSortedReverse = numbers.slice(0).sort((num1, num2) => num2 - num1);

console.log(`numbersReversed: ` + numbersReversed);
console.log(`numbersSortedReverse: ` + numbersSortedReverse);

console.log(`numbers: ` + numbers);

let numbersSortedSpread = [...numbers].sort((num1, num2) => num2 - num1);

console.log(`numbersSortedSpread: ` + numbersSortedSpread);

//Bonus Question: Can you do it using the Array.prototype.forEach() method?
let numbersForEachReveresed = [];

numbers.forEach((number) => {
  numbersForEachReveresed.unshift(number);
  console.log(numbersForEachReveresed);
});

console.log(`numbersForEachReversed: ` + numbersForEachReveresed);

console.log(`numbers: ` + numbers);
