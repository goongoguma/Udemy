const notes = [
  { title: "My next trip", body: "I would like to go to Spain" },
  { title: "Habbits to work on", body: "Exercise, Eating a bit better." },
  { title: "Office modification", body: "Get a new seat" }
];
// DOM - Document Object Model

// // query and remove
// // querySelector finds the first match
// const p = document.querySelector("p");
// p.remove();

//query all and remove
const ps = document.querySelectorAll("p");

ps.forEach(function(p) {
  // console.log(p.textContent); // read comment
  // p.remove();
  p.textContent = "*****";
});

// Add a new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new element from JavaScript";
document.querySelector("body").appendChild(newParagraph);
