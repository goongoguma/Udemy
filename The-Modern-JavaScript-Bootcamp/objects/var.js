var firstName = "Andrew";
firstName = "Mike";

// Reasons why we should not use 'var'
// var can be declared twice with a name that already exists
var firstName = "Jen";
console.log(firstName);

// var is function scope, not block scope which means if there is no function, there will be no scope for var
if (10 === 10) {
  var firstName = "Tom";
}
console.log(firstName); //Tom

// also var can access a variable before it is declared (hoisting)
console.log(age); // undefined
var age;
