const notes = [
  { hello: "hi" },
  { title: "My next trip", body: "I would like to go to Spain" },
  { title: "Habbits to work on", body: "Exercise, Eating a bit better." },
  { title: "Office modification", body: "Get a new seat" }
];

// find method returns what it matches itself
// just like object, when reference of an array changes, value of array also changes as well
const findNote = function(notes, noteTitle) {
  return notes.find(function(note, index) {
    return note.title === noteTitle;
  });
};

// // findIndex method returns the index
// const findNote = function(notes, noteTitle) {
//   const index = notes.findIndex(function(note, index) {
//     return note.title === noteTitle;
//   });
//   return notes[index];
// };

const note = findNote(notes, "Office modification");
console.log(note);
