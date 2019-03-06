// STRING
let myName = "Jae";
// myName = 28 // not gonna work

// NUMBER
let myAge = 27;
// myAge = 'Max' // not gonna work

// BOOLEAN
let hasHobbies = false;
// hasHobbies = 1 // not gonna work

// ASSIGN TYPE
let myRealAge; // any types
myRealAge = 27; // works
myRealAge = "27"; // works

// ARRAY
let hobbies = ["cooking", "sports"];
console.log(typeof hobbies); // object
// hobbies = [100] // Error : Type number[] is not assignable to type 'string[]'
// but hobbies: any[] will make it work

// TUPLES
let address: [string, number] = ["superstreet", 99];
//  The order => first element is string and second element is number
// Order is matter in tuples!

// ENUMS
// In enums, numbers are assigned automatically
enum Color {
  Gray, // 0
  Green, // 1
  Blue // 2
}
let myColor: Color = Color.Green;
console.log(myColor); // 1
// you can assign custom number
enum Color2 {
  Gray, // 0
  Green, // 100
  Blue
}
let myColor2: Color = Color.Green;
console.log(myColor2); // 100
// Color.Blue becomes 101

// ANY TYPE
let car: any = "BMW";
console.log(car); // BMW
car = { brand: "BMW", series: 3 };
console.log(car); // { brand: "BMW", series: 3 };

// FUNCTIONS
// : string refers return value
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// VOID
// : void => nothing to be returned
function sayHello(): void {
  // it does not return anything
  console.log("hello");
  // return myName // error
}

// ARGUMENT TYPES
function multiply(value1, value2): number {
  return value1 * value2;
}
console.log(multiply(2, "max")); // NaN

function multiply2(value1: number, value2: number): number {
  return value1 * value2;
}
console.log(multiply2(2, 5)); // 10
//  console.log(multiply2(2, "max")); // error

// FUNCTION TYPES
// we can set a type to a function
// it is just a function type, so it is not executed
// name does not matter but type does matter
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello; // error
// myMultiply();
myMultiply = multiply2;
console.log(myMultiply(5, 2)); // 10

// OBJECTS
// TypeScript forces the type userData variable should have
// userData variable is an object with name and age field
let userData: { name: string; age: number } = {
  name: "Jae",
  age: 28
};
// userData = {}; // error: empty object is not assignable
// userData = {a: 'hello', b: 22} // error: names of property do not match
// in object, name is do matter because order is not clear in object
// { name: string, age: number } is not value, it is a type

// COMPLEX OBJECT
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};
// complex = {} // error

// TYPE ALIAS
// it is not variable, it is a type
type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};

// UNION TYPES
let myRealRealAge: number | string = 28;
// the type of myRealRealAge variable could be number or string
myRealRealAge = "27";
// myRealRealAge = true // error because it is neither number type nor string type

// CHECK TYPES
let finalValue = "A string";
if (typeof finalValue == "string") {
  console.log("Final value is a string"); // we can see the result of console.log on a screen
}
// but if we write finalValue is equal to 'number', we are not getting an error but no result on a screen
// you can use check types when you are not sure what values you are getting

// NEVER TYPE
function neverReturens(): never {
  throw new Error("An error!");
}
// the function does not return void because it returns an error
// it never returns a value

// NULLABLE TYPES
let canBeNull = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12; // error: Type 'number' is not assignable to type null
// In TS 2.0, there is a way you can also be explicit about which you may be null and never be null
// You can force this behavior into tsconfig.json file and add "strictNullChecks": true
// after the setting up...
// canBeNull // error: Type 'null' is not assignable to type 'number'
// but if you use union type
let canBeNull2: number | null = 12;
canBeNull2 = null;
// If you initialize a value with null, it is not assumed to be of type any
