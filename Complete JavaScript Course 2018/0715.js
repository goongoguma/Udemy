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

//  LECTURE : Blocks and IIFEs 
/*
//ES6
{
  const a = 1;
  let b = 2;
}

console.log(a + b);

//ES5
(function() {
  var c = 3;
})();
*/

//  LECTURE : STRINGS
/*
let firstName = 'john';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2016 - year;
}

// ES5
console.log('This is ' + firstName +' ' + lastName + '. He was born in ' +
yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');
//This is John Smith. He was born in 1990. Today, he is 26 years old.

// ES6 (template literals)
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. 
Today he is ${calcAge(yearOfBirth)} years old.`);
//This is John Smith. He was born in 1990. Today, he is 26 years old.


// New string methods in ES6
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); //n.startsWith tells the string starts with J or not 
console.log(n.endsWith('th')); //n.startsWith tells the string ends with th or not 
console.log(n.includes('oh')); //n.includes tells the string includes oh or not 
console.log(firstName.repeat(5)); //.repeat tells the string repeats variable firstName for 5 times
*/

//  LECTURE : Arrow Functions 
/*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});
console.log(ages5); // [26, 51, 34, 79]

// ES6
let ages6 = years.map(el => 2016 - el); // one argument and one line of code 
console.log(ages6); // [26, 51, 34, 79]

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`); // in case two arguments
console.log(ages6); // ["Age element 1: 26.", "Age element 2: 51.", "Age element 3: 34.", "Age element 4: 79."]

ages6 = years.map((el, index) => { // in case add more lines of code
  const now = new
  Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`
});

console.log(ages6); // ["Age element 1: 26.", "Age element 2: 51.", "Age element 3: 34.", "Age element 4: 79."]
*/

//  LECTURE : Arrow Functions 2 : lexical 'this' variable 
/*
// ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    var self = this;
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  }

}
box5.clickMe(); // This is box number 1 and it is green

// ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click',() => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }

}
box6.clickMe(); // The result of it is as same as ES5 because this keyword in arrow functions shares lexically of its surroundings 

const box66 = {
  color: 'green',
  position: 1,
  clickMe: () => {
    document.querySelector('.green').addEventListener('click',() => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }

}
box66.clickMe(); // the result is 'This is box undfined and it is undfined' because this keyword in arrow functions shares lexically of its surroundings 

function Person(name) {
  this.name = name;

}

// ES5
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(function(el) {
    return this.name + ' is friends with ' + el;
  }.bind(this));
  console.log(arr); //"John is friends with Bob","John is friends with Jane","John is friends with Mark"
}

var friends = ['Bob', 'Jane', 'Mark']
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map( el => `${this.name} + is friends with ${el}`);
    
  console.log(arr);
}
new Person('Mike').myFriends6(friends);
*/





