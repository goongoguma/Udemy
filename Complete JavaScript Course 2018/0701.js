// Function Constructor

var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

//Blueprint function constructor form for var john
//The name of function constructor starts with capital letter
var Person = function(name, yearOfBirth, job) {
      this.name = name;
      this.yearOfBirth = yearOfBirth;
      this.job = job;
      
}

Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

//When we use new operator, first brand new empty object is created.
//after that the constructor function which in this case Person is called with the arguments that we specified. 
//Calling a function created new execution context also has 'this' variable.
//'this' variable of the function points empty object that was created in the beginning
//by the new operator.


//we have to add all the method and properties want to be inherited
//into the constructor prototype property.
var john = new Person('John', 1990, 'teacher');  // instantiation
var jane = new Person('Jane', 1969, 'designer'); // instantiation
var mark = new Person('Mark', 1948, 'retired'); // instantiation

//method is not anymore in the constructor but we can still use it because in the prototype property in of the function constructor
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);






