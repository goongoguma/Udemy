// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done
const startEl = document.querySelector("#start");
const wordEl = document.querySelector("#word");
const remainingEl = document.querySelector("#remaining");
const game1 = new Hangman("cat", 3);

wordEl.textContent = game1.getPuzzle(); // c*t
remainingEl.textContent = `Remaining Guess : ${game1.remainingGuesses}`;

window.addEventListener("keypress", e => {
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

getPuzzle("2", puzzle => {
  if (puzzle) {
    console.log(puzzle);
  } else {
    console.log(`Error : ${puzzle}`);
  }
});

// CHALLENGE

// 1. Create a new funciton for getting country details
// 2. Call it with two arguments : country code, the callback function
// 3. Make the HTTP request and call the callback with country information
// 4. Use the callback to print the country name

getCountry("KR", whatCountry => {
  if (whatCountry) {
    console.log(whatCountry.name);
  } else {
    console.log("ERROR!!");
  }
});
