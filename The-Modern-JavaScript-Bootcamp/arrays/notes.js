const notes = [
  { hello: "hi" },
  { title: "My next trip", body: "I would like to go to Spain" },
  { title: "Habbits to work on", body: "Exercise, Eating a bit better." },
  { title: "Office modification", body: "Get a new seat" }
];

// notes.pop();
// notes.push("My new note");

// console.log(notes.shift());
// notes.unshift("My first note");

// notes.splice(1, 1, "This is the new second item");

// // if you are going to change one item in the array, you can use basic bracket notation
// notes[2] = "This is now the new note 3";

// notes.forEach(function(item, index) {
//   console.log(index);
//   console.log(item);
// });

console.log(notes.length);
console.log(notes);

// when we comparing objects, it does not matter if they have same set of object properties and same object property values. That does not make objects equal.
// what makes two objects equal is if there is exact same object in memory.
// note: indexOf uses ===
console.log(notes.indexOf({ hello: "hi" })); // -1
let someObject = { hello: "hi" };
let otherObject = someObject;
console.log(someObject === otherObject); // true

// If you want to find object in an array, use findIndex() method not indexOf() method.
// findIndex returns first match it finds
const index = notes.findIndex(function(note, index) {
  return note.hello === "hi";
});
console.log(index); // 0
