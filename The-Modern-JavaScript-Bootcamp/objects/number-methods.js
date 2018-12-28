let num = 103.941;

console.log(num.toFixed(2)); //103.94

console.log(Math.round(num)); //104
console.log(Math.floor(num)); //103
console.log(Math.ceil(num)); //104

// Generating between two numbers
let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

// Challenge area
// 1 - 5 - true if correct, false if not correct

let makeGuess = function(guess) {
  return guess === Math.floor(Math.random() * 5) + 1;
};

console.log(makeGuess(3));
