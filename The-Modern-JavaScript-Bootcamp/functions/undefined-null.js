// Undefined for variable
let name;

name = "Jen";

if (name === undefined) {
  console.log("Please provide a name");
} else {
  console.log(name);
}
console.log(name); // undefined : it represents absence of value

// Undefiend for function arguments
// Undefiend as function return default value
let square = function(num) {
  console.log(num);
};

let result = square();
console.log(result);

// Null as assigned value
let age = 29;
age = null;
console.log(age); // null
