const notes = [
  { title: "My next trip", body: "I would like to go to Spain" },
  { title: "Habbits to work on", body: "Exercise, Eating a bit better." },
  { title: "Office modification", body: "Get a new seat" }
];

const filters = {
  searchText: ""
};

// CRUD OPERATION (CREATE, READ, UPDATE, DELETE)
// CREATE
// localStorage.setItem("location", "Incheon");
// READ
// console.log(localStorage.getItem("location"));
// UPDATE
// UPDATE also uses setItem with different value
// DELETE
// localStorage.removeItem("location");
// localStorage.clear() -> it deletes everything

// const user = {
//   name: "Jae Hyun",
//   age: 28
// };

// // HOW TO SAVE OBJECT IN LOCALSTORAGE
// const userJSON = JSON.stringify(user);
// console.log(userJSON);
// localStorage.setItem("user", userJSON);

// // HOW TO GET A DATA FROM THE LOCALSTORAGE
// const userJSON = localStorage.getItem("user");
// const user = JSON.parse(userJSON);
// console.log(`${user.name} is ${user.age}`);

// FILTERING NOTES
const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function(note) {
    const noteEl = document.createElement("p");
    noteEl.textContent = note.title;
    document.querySelector("#notes").appendChild(noteEl);
  });
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function(e) {
  e.target.textContent = "The button was clicked";
});

document.querySelector("#search-text").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function(e) {
  console.log(e.target.value);
});
