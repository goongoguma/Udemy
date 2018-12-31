const notes = [
  { title: "My next trip", body: "I would like to go to Spain" },
  { title: "Habbits to work on", body: "Exercise, Eating a bit better." },
  { title: "Office modification", body: "Get a new seat" }
];

console.log("a" < "b");

// calling just sort method is not going to do anythinging for array of objects. Therefore use function in sort method
const sortNotes = function(notes) {
  notes.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortNotes(notes);
console.log(notes);

// // find method returns what it matches itself
// // just like object, when reference of an array changes, value of array also changes as well
// const findNote = function(notes, noteTitle) {
//   return notes.find(function(note, index) {
//     return note.title === noteTitle;
//   });
// };

// const findNotes = function(notes, query) {
//   return notes.filter(function(note, index) {
//     const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
//     const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
//     return isTitleMatch || isBodyMatch;
//   });
// };

// console.log(findNotes(notes, "eating"));
