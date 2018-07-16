// LECTURE : Destructuring -> Convenient way extracting data from data structure

// ES5
var john = ['John', 26];
// var name = john[0];
// var age = john[1];


// ES6
const [name,year] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
  firstName: 'John',
  lastName: 'Smith'
}

const {fristName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const{fristName: a, lastName: b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}


const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);

/////////////////////////////////////////////////////
// LECTURE : Arrays in ES6

const boxes = document.querySelectorAll('.box');
// change 'list' to 'array'

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = 'dodgerblue';
})

// ES6
const boxesArr6 = Array.from(boxes); //'from' transforms the nodelist 'boxes' to an array
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');


//// LOOP

// ES5
for(var i = 0; i < boxesArr5.length; i++) {
  if(boxesArr5[i].className === 'box blue') {
    continue; // skip the iteration of the loop and goes right to the next one
  }
  boxesArr5[i].textContent = 'I changed to blue!';
}

// ES6
for(const cur of boxesArr6) {
    if(cur.className.includes('blue') === 'box blue') {
      continue;
    }
    cur.textContent = 'I changed to blue!';
}


//// FINDING ELEMENTS IN AN ARRAY

// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
  return cur => 18;
});
console.log(full);

console.log(full.indexOf(true)); // 3
console.log(ages[full.indexOf(true)]); // 21

// ES6
console.log(ages.findIndex(cur => cur >= 18)); // 3 (value)
console.log(ages.find(cur => cur >= 18)); // 21 (index)


/////////////////////////////////////////////////////
// LECTURE : Spread Operator -> Convenient way to expand elements of an array in places like arguments and function calls

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2); // 81

// ES6
const sum3 = addFourAges(...ages); // ... expand the 'ages' array into its components 
console.log(sum3); // 81


//// Combine two family names into one array
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily); // ["John", "Jane", "Mark", "Lily", "Mary", "Bob", "Ann"]


//// Using spread operator in node list
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes]

Array.from(all).forEach(cur => cur.style.color = 'purple'); //Array.from(all) makes 'all' into an array


/////////////////////////////////////////////////////
// LECTURE : Rest Parameter 
// -> it allows to an arbitrary number of arguments into a function and use it in that function.
// -> it receives couple of single values and transforms them into an array when we call a funciton with multiple parameters

// ES5
function isFUllAge5() {
  //console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function(cur) {
    console.log((2016 - cur) >= 18);
  })
}

isFUllAge5(1990, 1999, 1965);
isFUllAge5(1990, 1999, 1965, 2016, 1987);

// ES6

// as soon as we call the function, it will transform the arguments into an array and then pass it into the function
// and we can access that years array automatically in a function and use it as we did before 
function isFUllAge6(...years) {
    years.forEach(cur => console.log(2016 - cur >= 18));
}

isFUllAge6(1990, 1999, 1965, 2016, 1987);

// spread operator is used in the function call 
// while the rest operator is used in the function declaration to accept an arbitrary number of parameters.


//// Whcih age of a person becomes full of age

// ES5
function isFUllAge5(limit) {
  var argsArr = Array.prototype.slice.call(arguments, 1); // it is going to start to cut at position number one. 
  console.log(argsArr); // [21, 1990, 1999, 1965]

  argsArr.forEach(function(cur) {
    console.log((2016 - cur) >= limit);
  })
}

isFUllAge5(16, 1990, 1999, 1965); // three times true 


// ES6

// as soon as we call the function, it will transform the arguments into an array and then pass it into the function
// and we can access that years array automatically in a function and use it as we did before 
function isFUllAge6(limit, ...years) {
    years.forEach(cur => console.log(2016 - cur >= limit));
}

isFUllAge6(16, 1990, 1999, 1965, 2016, 1987); // true true true true false true 


/////////////////////////////////////////////////////
// LECTURE : Default parameters 
// -> it is used to pre-reset one or more parameters of a function. which are default values

// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
 
 lastName === undefiend ? lastName = 'Smith' : lastName = lastName;
 nationality === undefiend ? nationality = 'american' : nationality = nationality;
  
  this.firstNmae = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');

// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'america') {
  this.firstNmae = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
// firstName: "John", lastName: "Smith", nationality: "american", yearOfBirth: 1990
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish'); // overides default value
// firstName: "Emily", lastName: "Diaz", yearOfBirth: 1983, nationality: "spanish"