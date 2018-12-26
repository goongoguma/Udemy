// Function - input(argument), code, output(return value)

let greetUser = function() {
  console.log("Welcome user!");
};

// Global scope (convertFahrenheitToCelsius, celcius1, celcius2)
// Local scope (fahrenheit, celsius)
// Local scope (isFreezing)

let convertFahrenheitToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) / 1.8;

  if (celsius <= 0) {
    let isFreezing = true;
  }

  return celsius;
};

let celcius1 = convertFahrenheitToCelsius(32);
let celcius2 = convertFahrenheitToCelsius(68);

console.log(celcius1); // 0
console.log(celcius2); // 20
