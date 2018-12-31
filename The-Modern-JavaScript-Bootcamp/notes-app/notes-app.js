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
