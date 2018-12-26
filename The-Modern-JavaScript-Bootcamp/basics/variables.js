// 1. variables cannot be declared in same name twice
// However, you can assign new value to existing variable without declaration fo 'let'
let perName = "Goguma";
let petName = "Gamja";
petName = "Baechu";

console.log(petName); // Baechu

// 2. There are rules related to variable names
let test_ = 2;
let result = 3 + 4;

// 3. Variable names cannot be reserved keywords
let let = 12 // not gonna work
let llet = 12 // working well 
