/*
Question 4
Starting with the string:

show two different ways to put the expected "Four score and " in front of it.
*/
let famousWords = 'seven years ago...';

let allFamouseWords = 'Four score and ' + famousWords;

let firstPartFamousWords = 'Four score and ';

console.log(
  `Using concat() method on strings: ` +
    firstPartFamousWords.concat(famousWords)
);

console.log(
  `Concatenating strings together with + operator: ` + allFamouseWords
);
