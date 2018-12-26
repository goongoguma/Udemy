// Function - input(argument), code, output(return value)

let greetUser = function() {
  console.log("Welcome user!");
};

greetUser();
greetUser();
greetUser();

let square = function(num) {
  let result = num * num;
  return result;
};

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

// Challenge Area

// Declare convertFahrenheitToCelsius
let convertFahrenheitToCelsius = function(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
};

// Call a couple of times (32 -> 0) (68 -> 20)
let celcius1 = convertFahrenheitToCelsius(32);
let celcius2 = convertFahrenheitToCelsius(68);

// print the converted values
console.log(celcius1); // 0
console.log(celcius2); // 20
