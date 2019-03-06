// STRING
var myName = "Jae";
// myName = 28 // not gonna work
// NUMBER
var myAge = 27;
// myAge = 'Max' // not gonna work
// BOOLEAN
var hasHobbies = false;
// hasHobbies = 1 // not gonna work
// ASSIGN TYPE
var myRealAge; // any types
myRealAge = 27; // works
myRealAge = "27"; // works
// ARRAY
var hobbies = ["cooking", "sports"];
console.log(typeof hobbies); // object
// hobbies = [100] // Error : Type number[] is not assignable to type 'string[]'
// but hobbies: any[] will make it work
// TUPLES
var address = ["superstreet", 99];
//  The order => first element is string and second element is number
// Order is matter in tuples!
// ENUMS
// In enums, numbers are assigned automatically
var Color;
(function(Color) {
  Color[(Color["Gray"] = 0)] = "Gray";
  Color[(Color["Green"] = 1)] = "Green";
  Color[(Color["Blue"] = 2)] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); // 1
// you can assign custom number
var Color2;
(function(Color2) {
  Color2[(Color2["Gray"] = 0)] = "Gray";
  Color2[(Color2["Green"] = 1)] = "Green";
  Color2[(Color2["Blue"] = 2)] = "Blue";
})(Color2 || (Color2 = {}));
var myColor2 = Color.Green;
console.log(myColor2); // 100
// Color.Blue becomes 101
// ANY TYPE
var car = "BMW";
console.log(car); // BMW
car = { brand: "BMW", series: 3 };
console.log(car); // { brand: "BMW", series: 3 };
// FUNCTIONS
// : string refers return value
function returnMyName() {
  return myName;
}
console.log(returnMyName());
// VOID
// : void => nothing to be returned
function sayHello() {
  // it does not return anything
  console.log("hello");
  // return myName // error
}
// ARGUMENT TYPES
function multiply(value1, value2) {
  return value1 * value2;
}
console.log(multiply(2, "max")); // NaN
function multiply2(value1, value2) {
  return value1 * value2;
}
console.log(multiply2(2, 5)); // 10
//  console.log(multiply2(2, "max")); // error
// FUNCTION TYPES
var myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
