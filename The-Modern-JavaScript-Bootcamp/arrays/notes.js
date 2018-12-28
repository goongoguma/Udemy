const notes = ["Note 1", "Note 2", "Note 3"];

// notes.pop();
// notes.push("My new note");

// console.log(notes.shift());
// notes.unshift("My first note");

// notes.splice(1, 1, "This is the new second item");

// if you are going to change one item in the array, you can use basic bracket notation
notes[2] = "This is now the new note 3";

notes.forEach(function(item, index) {
  console.log(index);
  console.log(item);
});

console.log(notes.length);
console.log(notes);
