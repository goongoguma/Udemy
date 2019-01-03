const Hangman = function(word, remaining) {
  this.word = word;
  this.remaining = remaining;
};

const game1 = new Hangman("cat", 2);
console.log(game1);

const game2 = new Hangman("hello", 4);
console.log(game2);
