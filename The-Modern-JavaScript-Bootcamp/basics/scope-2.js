// Global (name)
// Local  (name)
// Local
// Local

// When the scope is different, we can define variables with same name in each scope
// let name = "Andrew";
if (true) {
  // let name = "Mike";
  if (true) {
    // it is going to print Jen due to variable shadowing
    // variable without let is declared globally
    let name = "Jen";
    console.log(name); // Jen
  }
}

if (true) {
  console.log(name); // error
}
