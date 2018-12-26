// === : equality operator
// !== : not equal operator
// < : less than operator
// > : greater than operator
// <= : less than or equal to operator
// >= : greater than or equal to operator

let temp = "Andrew";
let isFreezing = temp === "Andrew"; // true
// let isFreezing = temp !== "Andrew "; // false
console.log(isFreezing); // true

let temp2 = 32;
let isFreezing2 = temp2 < 32;
// let isFreezing2 = temp2 > 32; // false
// let isFreezing2 = temp2 => 32; // true
console.log(isFreezing2); // true

// Challenge area

// Create age set to your age
let age = 29;
// Calculate is child - if they are 7 or under
let isChild = age <= 7;
// Calculate is senior - if they are 65 or older
let isSenior = age >= 65;
// Print is child value
console.log(isChild); // false
// Print is senior value
console.log(isSenior); // false
