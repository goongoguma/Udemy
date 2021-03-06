// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done
import validator from "validator";
import uuidv4 from "uuid/v4";
import Hangman from "./hangman";
import getPuzzle from "./request";

console.log(uuidv4()); // random id
console.log(validator.isEmail("abc@ocl.com")); // true

const startEl = document.querySelector("#start");
const wordEl = document.querySelector("#word");
const remainingEl = document.querySelector("#remaining");
const pEl = document.querySelector("#status");
let game1;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  startEl.remove();

  if (game1.remainingGuesses > 0) {
    document.querySelector("#status").textContent = "PLAYING...";
  }
  game1.guessing(guess);
  render();

  if (!wordEl.textContent.split("").includes("*")) {
    document.querySelector("#status").textContent = "YOU GOT IT RIGHT!";
  }
});

const render = () => {
  wordEl.innerHTML = "";
  remainingEl.textContent = `Remaining Guess : ${game1.remainingGuesses}`;

  game1
    .getPuzzle()
    .split("")
    .forEach(letter => {
      const letterEl = document.createElement("span");
      letterEl.textContent = letter;
      wordEl.appendChild(letterEl);
    });
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5);
  console.log(game1);
  render();
};

document.querySelector("#reset").addEventListener("click", () => {
  startGame();
  pEl.textContent = "";
});

startGame();
