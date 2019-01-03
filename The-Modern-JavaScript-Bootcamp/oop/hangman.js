const Hangman = function(word, remaining, guessedLetters) {
  this.word = word.toLowerCase().split("");
  this.remaining = remaining;
  this.guessedLetters = ["c", "e"];
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

const game1 = new Hangman("cat", 2);
console.log(game1.getPuzzle());

const game2 = new Hangman("hello", 4);
console.log(game2.getPuzzle());
