/////////////////////////////////////////////////////
// LECTURE : Maps
// In Maps, we can use anyting as keys which opens a lot of possibilities and it is iterable and we can easily manipulate data.
const question = new Map();
question.set('question','What is the official name of the lastest JavaScript version?'); // .set(key, value)
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

// retrieve the data from the map -> .get
console.log(question.get('question')); // What is the official name of the lastest JavaScript version?

// retrieve the size of the date from the map -> .size
console.log(question.size); // 8 

// remove the size of the data for the map 
if(question.has(4)) {   // if there is a key no.4 in the Map, delete it.
  question.delete(4);
}

// remove all data from the map
question.clear(); // Map {}


// loop Map() using forEach method
question.forEach((value, key) => console.log(`This is ${key} and it's set to ${value}`));

for (let [key, value] of question.entries()) { // The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided by a for...in loop
  if (typeof(key) === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
} // What is the official...version? 
 //Answer1: ES5, Answer2: ES6, Answer3: ES2015, Answer4:ES7


 // getting the correct answer
const ans = parseInt(prompt('Write the correct answer')) //parseInt converts the content into the integer
console.log(question.get(ans === question.get('correct')));


/////////////////////////////////////////////////////
// LECTURE : Classes (synthetic sugar)
// -> Classes make it easier to implement inheritance and to create objects based on blueprints(function constructor).
// -> Class definitions are not hoisted
// -> We can only add method to classes not properties
// ES5 
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function() {
  var age = new Date.getFullYear - this.yearOfBirth;
  console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

// ES6
class Person6 {  // class declaration
    constructor (name,yearOfBirth,job) {
      this.name = name;
      this.yearOfBirth = yearOfBirth;
      this.job = job;
    }

    calculateAge() {
      var age = new Date.getFullYear - this.yearOfBirth;
      console.log(age);
    }

    static greeting() { // static method is not going to inherit it
      console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();


/////////////////////////////////////////////////////
// LECTURE : Classes with subclasses
// -> Person5 is a super-class and Athlete5 is a sub-class

var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function() {
  var age = new Date.getFullYear() - this.yearOfBirth;
  console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job); // 'this' indicates newly created empty object of Athlete5 
  this.olympicGames = olympicGames;
  this.medals = medals;
}

// Athlete5.prototype.wonMedal = function() {
//     this.medals++;
//     console.log(this.medals);
// }

Athlete5.prototype = Object.create(Person5.prototype); // two function constructors are connected and the prototype chain should work

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10); 

johnAthlete5.calculateAge();  // 26
//johnAthlete5.wonMedal();  // 11


// ES6
class Person6 {  // class declaration
  constructor (name,yearOfBirth,job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date.getFullYear() - this.yearOfBirth;
    console.log(age); // 26
  }
}

class Athlete6 extends Person6 { 
    constructor(name, yearOfBirth, job, olympicGames, medals) {
      super(name, yearOfBirth, job); //super() calls Person6 automatically
       this.olympicGames = olympicGames;
       this.medals = medals;
    }
    wonMedal() {
      this.medals++;
      console.log(this.medals); // 11
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6/wonMedal(); 
johnAthlete6.calculateAge();
