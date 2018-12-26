// Multiple arguments
let add = function(a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

// Default arguments
// Default arguments won't be needed if there are arguments in declaration
let getScoreText = function(name = "Anonymous", score = 0) {
  return "Name: " + name + " - Score: " + score;
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// Challenge area
// total, tipPercent .2

let tipCal = function(total, tip = 0.2) {
  return total * tip;
};

let tipPercent = tipCal(100);
console.log(tipPercent);
