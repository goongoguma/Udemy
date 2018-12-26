// Lexical Scope (Static Scope)
// Global Scope : Defined outside of all code blocks
// Local Scope : Defined inside a code block

// In a scope you can access variables defined in that scope, or in any parent/ancestore scope

// Global Scope (varOne)
// Local Scope (varTwo)
// Local Scope(varFour)
// Local Scope (varThree)
// varTwo and varThree are in different scope

let varOne = "varOne";

if (true) {
  console.log(varOne);
  let varTwo = "varTwo";
  console.log(varTwo);

  if (true) {
    let varFour = "varFour";
    console.log(varOne);
    console.log(varTwo);
    console.log(varFour);
  }
}

if (true) {
  let varThree = "varThree";
  console.log(varThree);
}

console.log(varTwo); // not accessable in the global scope
