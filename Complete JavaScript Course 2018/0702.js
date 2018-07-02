/*
// Object.create
var personProto = {
  calcualteAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John'
john.yearOfBirth =  1990;
john.job = 'teacher';


var jan = Object.create(personProto, 
{
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});

// The difference between 'function constructor' and 'Object.create' is that
// 'Object.create' builts an object inherited directly from one that we passed into the first argument.
// On the other hand, 'function constructor' newly creates an object inherited from function constructore prototype property.
// One of the biggest benefits of 'object.create' is that it allows to implement really complex inheritant structures
// in an easier way than 'function constructors' because it allows us to directly specify which object should be a prototype.
*/

/*
// Primitives vs Objects
// Variables containg primitives actually hold that data inside of the variable itself.
// However a variables associated with objects do not acutall contain the object, 
// instead they contain a reference to the place in memory where the object sits, so where the object is stored.
// A variable declared as an object does not have a real copy of the object it just points to that object.


// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);
// This example indicates that each of the variables acutally hold their own copy of the data. They do not reference anything.
// Therefore two variable holding things are really two different things.


// Objects
var obj1 = {
  name: 'John',
  age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
// All that we did was to create a new reference which ponits to the first object, so the object one and obejct two variables both hold a reference 
// that point to the exact same object in the memory, this is why when we change the age in object one, this change is also refelcted on object two
// because in fact it is the exact same object.

/*
// Functions
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a,b) {
  a = 30;
  b.city = 'san franscisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
// We pass the age variable holding a primitive and the object variable holding a reference to an object into 'function change'.
// The function then as it was invoked, attempted to change the arguments that we passed into it.
// So when we console.log the values we see the same thing as before, and that is the primitive has remained unchanged.
// But the city of the object has changed from Lisbon to san francisco.
// This shows us that when we pass a primitive into the function, a simple copy is created so we can change A as much as we want,
// it will never affect the variable on the outside because it is a primitive. but when we pass the object it is not really the object that we pass,
// but the reference to the object.
*/



// FUNCTIONS ARE ALSO OBJECTS IN JAVASCRIPT
// -> A function is an instance of the Object type;
// -> A function behaves like any other object;
// -> We can store functions in a variable;
// -> We can pass a function as an argument to another function
// -> We can return a function from a function;
// => Because of all these reason, We call it 'first-class-function'


/*
// Passing functions as arguments 
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes
}

//callback function
function calculateAge(el) {
  return 2016 - el;
} 


function isFullAge(el) {
  return el >= 18;
}

function maxHeartRage(el) {
  if(el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return - 1;
  }
}


var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRage);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/


/*
// Functions returning functions
function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?')
    }
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function(name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
// if we run this 'teacherQuestion' variable will be the function that is returned from 'interviewQuestion' when we pass teacher.

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
*/


// IIFE (Immediately Invoked Function Expressions)
/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

// Without a name and a paranthesis, then a JavaScript parser would think this is a function declaration. 
// But since we don't have name for the function declaration, then it will throw an error.
// Therefore we basically need to trick the parser, and make it believe that what we have here is an expression not a declaration.
// Solution is wrap enitre thing into paranthesis because in JavaScript, what's inside of parenthesis cannot be a statement and like this,
// JavaScript will know that it should treat this as an expression, not as a declaration.
// After that, we only have to invoke the function. 
// Also we can no longer access the score variable from the outside which means we have created data privacy here.
// IIFE is available only once because this function is not assigned to any variable. 
// All we want here is to create a new scope that is hidden from the outside scope so where we can safely put variables.
// With this, we obtain data privacy, don't interfere with other variables in our global execution context.

(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

// console.log(score); // 'not defined'


(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
*/


// Closures
// -> CLOSURES SUMMARY : An inner function has always access to the variables and parameters of its outer function, even after the outer function has returned.
/*
function retirement(retirementAge) {
  var a = ' years left until retirement.';
  return function(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);


function interviewQuestion(job) {
  return function(name) {
      if (job === 'designer') {
        console.log(name + ', can you please explain what UX design is?')
      } else if (job === 'teacher') {
        console.log('What subject do you teach, ' + name + '?');
      } else {
        console.log('Hello ' + name + ', what do you do?');
      }
   }
}
interviewQuestion('teacher')('John');
// The decision is taken right inside of the function that we returned.
// That is possible because we can use 'job' variable to take a decision even after the interviewQuestion function has already returned.
*/


// Bind, call and apply 
/*
var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay+ ', Ladies and gentlemen! I\'m '+ this.name + ' I\'m a ' + this.job + ' and I\'m' + this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('Hey what\'s up? I\'m '+ this.name + ' I\'m a ' + this.job+ ' and I\'m' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
};

john.presentation('formal', 'morning');

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

// first argument of call method always sets 'this' variable.
john.presentation.call(emily, 'friendly', 'afternoon'); // This is called 'method borrowing'

// john.presentation.apply(emily, ['friendly, afternoon']); // not gonna work because our method does not expect to get 'array' input
// 'bind' allows us to creat a copy of a function with a preset argument
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

// ex.
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
    }
  return arrRes
}

function calculateAge(el) {
  return 2016 - el;
} 

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/ 








