//  LECTURE : LET AND CONST 
/*
// ES5 version
var name5  = 'Jane Smith';
var aget5 = 23;
name5 = 'Jan Miller';
console.log(name5);

// ES6
// const : value we do not want to change
// let : value we actually want to change or mutate
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6); // this will get an error due to the value is immutable 
*/

// SCOPE
/*
// ES5(function scope)
function driversLicence5(passedTest) {

    if(passedTest) {
      var firstName = 'John';
      var yearOfBirth = 1990;
  }
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence5(true); //John, born in 1990, is now officially allowed to drive a car. 

// ES6(block scope) : if we out of a block, we are no longer accessable inside of a block 
function driversLicence6(passedTest) {
    let firstName;
  if(passedTest) {
    firstName = 'John';
    const yearOfBirth = 1990;
  }
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.'); 
}
driversLicence6(true); // error : firstName is not defined 
//if the variable 'let' is declared first outside of a block without defining a value, the variable can be accessable from outside but variable 'const' is not 
//in ES6, variable can be hoisted but cannot be accessable before it is declared.(it gives an error)

//another example of block scope 
let i = 23;
for(let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
*/