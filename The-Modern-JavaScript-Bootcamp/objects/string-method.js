let name = "Jae Hyun An";

// Length property
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Includes method
let password = "abc123password098";
console.log(password.includes("password")); //true

// Trim
console.log(name.trim());

//Challenge

// isValidPassword
// length is more than 8 and it does not containe the word password

let isValidPassword = function(password) {
  return password.length > 8 && !password.includes("password");
};

console.log(isValidPassword("wqfvk")); // false
console.log(isValidPassword("abc12345bdfew")); // true
console.log(isValidPassword("qwerpassword")); // false
