/******************************************
* Functions
*/

// function calcualteAge(birthYear) {
//   return 2018 - birthYear;
// }

// //function is like a machine that receives some input then it does some stuff with it and finally return something else.

// var ageJohn = calcualteAge(1990);
// var ageMike = calcualteAge(1948);
// var ageJane = calcualteAge(1969);
// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//   var age = calcualteAge(year);
//   var retirement = 65 - age;

//   if(retirement > 0 ){
//     console.log(firstName + ' retires in ' +retirement + ' years.');
//   } else {
//     console.log(firstName + ' is already retired.')
//   }
  
// }

// yearsUntilRetirement(1990,'John')
// yearsUntilRetirement(1948,'Mike')
// yearsUntilRetirement(1969,'Jane')

// //DRY => DON'T REPEAT YOURSELF


/******************************************
* Function Statements and Expressions
*/

// Function declaration
// function whatDoYouDo(job,firstName){}

// Function expression
// var whatDoYouDo = function(job, firstName){
//   switch(job) {
//     case 'teacher':
//       return firstName + ' teaches kids how to code';
//     case 'driver':
//       return firstName + ' drives a cab in Lisbon.'
//     case 'designer':
//       return firstName + ' designs beautiful websites';
//     default:
//       return firstName + ' does something else';
//   }
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));

// JavaScript expression : it is a piece of code that always produces a value. 
// which means whenever JavaScript expects value, always have to write expression.
//  ex. 2+3 , whatDoYouDo('teacher', 'John'), typeof 23 etc

// JavaScript statement : it just performs actions, it does not produce immediate result.
// ex. if / else statement, while loop etc

/******************************************
* Arrays
*/

//Initialize new array
// var names = ['John', 'Mark','Jane'];
// var years = new Array(1990, 1969, 1948); //Array Function

// console.log(names[2]);
// console.log(names.length);

// // Mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

// Different data types
// var john = ['John', 'Smith', 1990, 'teacher', false];
// john.push('blue'); //push method adds element at the end of the array
// john.unshift('Mr.'); //unshift method adds elements at the beginning of the array  
// console.log(john);

// john.pop(); //removes element at the end 
// john.shift(); //removes element at the beginning
// console.log(john);

// john.indexOf(1990) // it will return the position of argument that we pass in inside of the array. if there is no match then returns -1
// console.log(john.indexOf(1990));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a desingner';
// console.log(isDesigner);


/******************************************
* Objects and properties
*/

// Object literal
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false
// };
// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// // new Object syntax
// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);


/******************************************
* Objects and methods
*/

// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge: function() {
//       this.age = 2018 - this.birthYear;
//   }
// };

// john.calcAge();
// console.log(john);


/******************************************
* Loops and Iteration
*/

// for loop
// for(var i = 1; i <= 20; i += 2){
//   console.log(i);
// }

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1, 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 false, exit the loop!

// var john = ['John', 'Smith', 1990, 'teacher', false];

// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }

// // while loop
// var i = 0;
// while(i < john.length) {
//   console.log(john[i]);
//   i++;
// }

// Continue and break statements
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++) {
//   if(typeof john[i] !== 'string' ) continue;
//   console.log(john[i]);
// }
// for (var i = 0; i < john.length; i++) {
//   if(typeof john[i] !== 'string' ) break;
//   console.log(john[i]);
// }

// // Looping backwards
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for(var i = john.length - 1; i >= 0; i--){
//   console.log(john[john.length]);
// }

