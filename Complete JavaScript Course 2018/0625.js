/***************************************
 * Variables and data types
 */
/*var firstName = 'John';
console.log(firstName); 

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
var if = 23;*/

/***************************************
 * Variable mutation and type coercion
 */
// var firstName = 'John';
// var age = 28;

// //Type coercion
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// //isMarried = false;

// console.log(firstName+' is a '+age+' year old '+job+'. is he married?'+ isMarried);

// // Variable mutation
// age = 'twenty eight';
// job = 'driver';

// alert(firstName+' is a '+age+' year old '+job+'. is he married?'+ isMarried);

// prompt('What is his last Name?');
// console.log(firstName+' '+lastName);


/***************************************
 * Basic operators
 */
// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// // Math operators
// yearJohn = now - ageJohn;
// yeahMark = now - ageMark;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);


// // Logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);

/***************************************
 * Operator precedence
*/

//  var now = 2018;
//  var yearJohn = 1989;
//  var fullAge = 18;

//  // Multiple operators
//  var isFullAge = now - yearJohn >= fullAge; //true
//  console.log(isFullAge);

//  // Grouping
//  var ageJohn = now - yearJohn;
//  var ageMark = 35;
//  var average = (ageJohn + ageMark) / 2;
//  console.log(average);

//  // Multiple assignments
//  var x, y;
//  x = y = (3 + 5) * 4 - 6 //8 * 4 - 6 // 32 - 6 // 26
//  console.log(x, y);

//  // More operators
//  x*=2;
//  console.log(x);
//  x+=10;
//  console.log(x);

/***************************************
 * If / else statements
*/

// var firstName = 'John';
// var civilStatus = 'single';

// if(civilStatus === 'married'){
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' will hopefully marry soon :)');
// }

// var isMarried = true;
// if(isMarried){
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' will hopefully marry soon :)');
// }

/***************************************
 * If / else statements
*/

// var firstName = 'John';
// var age = 20;

// if(age < 13) {
//   console.log(firstName + 'is a boy.');
// } else if(age >= 13 && age < 20 ) { // between 13 and 20 === age >= 13 AND age < 20
//   console.log(firstName + 'is a teenager.');
// }
//   else if(age >= 20 && age < 30){
//     console.log(firstName + 'is a young man.');
//   }
// else {
//   console.log(firstName + 'is a man.');
// }

/***************************************
* The Ternary Operator and Switch Statements
*/

// var firstName = 'John';
// var age = 16;

// Ternary operator
// age >= 18 ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice.')

// var drink = age >= 18 ? 'beer' : 'juice'
// console.log(drink);

// if (age >= 18){
//   var drink = 'beer';
// } else {
//   var drink = 'juice';
// }

// Switch statement
// var job = 'teacher';
// switch (job) {
//   case 'teacher':
//   case 'instructor':
//   console.log(firstName + ' teaches kids how to code.');
//   break;
//   case 'driver':
//   console.log(firstName + ' drives an uber in Lisbon.');
//   break;
//   case 'designer':
//   console.log(firstName + ' designs beautiful websites.');
//   break;
//   defaul:
//   console.log(firstName + ' does something else.');
// }

/***************************************
* Truthy and Falsy values and equality operators
*/
// falsy values : undefined, null, 0, '', NaN
// truthy values : NOT falsy values

// var height;

// height = 23;

// if (height || height === 0) {
//   console.log('Variable is defiend');
// } else {
//   console.log('Variable has not been defiend');
// }

/***************************************
* Equality operators
*/
// if (height == '23') {
//   console.log('The == operator does type coercion!');
// }








