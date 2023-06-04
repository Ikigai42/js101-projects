/**Question 9
Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?
*/
let title = 'Flintstone Family Members';
let tableLength = 40;

let amtofSpacesForPadding = Math.floor((tableLength - title.length) / 2);

let paddedTitle = title.padStart(amtofSpacesForPadding + title.length);

console.log(title.length);
console.log(amtofSpacesForPadding);
console.log(paddedTitle);
