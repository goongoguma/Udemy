// Create a method for making a guess
//  1. Should accept a character for guessing
//  2. Should add unique guesses to list of guesses
//  3. Should decrement the guesses left if a unique guess isn't a match

const Hangman = function(word, remaining) {
  this.word = word.toLowerCase().split("");
  this.remaining = remaining;
  this.guessedLetters = [];
};

Hangman.prototype.getPuzzle = function() {
  let puzzle = "";
  this.word.forEach(letter => {
    if (this.guessedLetters.includes(letter) || letter === " ") {
      puzzle += letter;
    } else {
      puzzle += "*";
    }
  });
  return puzzle;
};

//  1. word가 포함하고 있는 알파벳이며 중복되지 않을경우 guessedLetter 배열에 넣어주기
//  2. word에 포함되지 않는 알파벳인 경우에는 remaining의 숫자에서 빼주기

Hangman.prototype.guessing = function(alphabet) {
  guess = alphabet.toLowerCase();
  if (!this.guessedLetters.includes(guess) && !this.word.includes(guess)) {
    this.remaining -= 1;
  } else if (!this.guessedLetters.includes(guess)) {
    this.guessedLetters.push(guess);
  }
};

const game1 = new Hangman("cat", 3);

// Guess c, t, z
// Print remaining guesses (should be 1)
// console.log(game1.getPuzzle()); // c*t
// console.log(game1.remaining);

window.addEventListener("keypress", function(e) {
  const guess = String.fromCharCode(e.charCode);
  console.log(game1.guessing(guess));
  console.log(game1.getPuzzle()); // c*t
  console.log(game1.remaining);
});
