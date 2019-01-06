const game1 = new Hangman("cat", 3);
const startEl = document.querySelector("#start");
const wordEl = document.querySelector("#word");
const remainingEl = document.querySelector("#remaining");

wordEl.textContent = game1.getPuzzle(); // c*t
remainingEl.textContent = `Remaining Guess : ${game1.remainingGuesses}`;

window.addEventListener("keypress", function(e) {
  const guess = String.fromCharCode(e.charCode);
  startEl.remove();

  if (game1.remainingGuesses > 0) {
    document.querySelector("#status").textContent = "PLAYING...";
  }
  game1.guessing(guess);

  wordEl.textContent = game1.getPuzzle(); // c*t

  if (!wordEl.textContent.split("").includes("*")) {
    document.querySelector("#status").textContent = "YOU GOT IT RIGHT!";
  }

  remainingEl.textContent = `Remaining Guess : ${game1.remainingGuesses}`;
});
