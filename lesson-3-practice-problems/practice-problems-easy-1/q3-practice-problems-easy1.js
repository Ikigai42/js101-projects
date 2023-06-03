/**Question 3
Determine whether the following object of people and their age contains an entry for 'Spot':
 */

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(ages);
console.log(`('Spot' in ages) ` + ('Spot' in ages));
console.log(`('Herman' in ages) ` + ('Herman' in ages));

/** Note that our keys have capitalized names; this usually violates style guidelines, but is fine for our purposes. We'll use such keys in several exercises in this course. */

//LS answer:
ages.hasOwnProperty('Spot');
console.log(`ages.hasOwnProperty("Spot") ` + ages.hasOwnProperty('Spot'));
