const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split("");
  this.remainingGuesses = remainingGuesses;
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
    this.remainingGuesses -= 1;
    if (this.remainingGuesses <= 0) {
      document.querySelector("#status").textContent = "GAME OVER";
    }
  } else if (!this.guessedLetters.includes(guess)) {
    this.guessedLetters.push(guess);
  }
};
