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

// getPuzzle("2").then(
//   data => {
//     console.log(data.puzzle);
//   },
//   err => {
//     console.log(`Error: ${err}`);
//   }
// );

getPuzzle("2")
  .then(puzzle => {
    console.log(puzzle);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });

// getCountry("KR").then(
//   resolvedCountry => {
//     console.log(resolvedCountry.name);
//   },
//   rejectedCountry => {
//     console.log(rejectedCountry);
//   }
// );

// // fetch is gonna resolve or reject when it actually ready for us therfore we know that request is completed.
// fetch("http://puzzle.mead.io/puzzle", {})
//   .then(response => {
//     if (response.status === 200) {
//       // this will return promise
//       return response.json();
//     } else {
//       // this will fire .catch
//       throw new Error("Unable to fetch the puzzle");
//     }
//   })
//   .then(data => {
//     console.log(data.puzzle);
//   })
//   .catch(error => {
//     console.log(error);
//   });
