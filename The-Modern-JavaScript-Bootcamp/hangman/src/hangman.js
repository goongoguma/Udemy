class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
  }

  getPuzzle() {
    let puzzle = "";
    this.word.forEach(letter => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });
    return puzzle;
  }

  guessing(alphabet) {
    const guess = alphabet.toLowerCase();
    if (this.remainingGuesses > 0) {
      if (!this.guessedLetters.includes(guess) && !this.word.includes(guess)) {
        this.remainingGuesses -= 1;
        if (this.remainingGuesses === 0) {
          document.querySelector(
            "#status"
          ).textContent = `GAME OVER. The word was "${this.word.join("")}"`;
          return null;
        }
      } else if (!this.guessedLetters.includes(guess)) {
        this.guessedLetters.push(guess);
        // [...this.guessedLetters, guess];
      }
    }
  }
}

export { Hangman as default };
