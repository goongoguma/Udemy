let notes = [];

const filters = {
  searchText: ""
};

// Check for existin saved data
const notesJSON = localStorage.getItem("notes");

if (notesJSON) {
  notes = JSON.parse(notesJSON);
}

// FILTERING NOTES
const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function(note) {
    const noteEl = document.createElement("p");

    if (note.title.length) {
      noteEl.textContent = note.title;
    } else {
      noteEl.textContent = "Unnamed note";
    }

    document.querySelector("#notes").appendChild(noteEl);
  });
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function(e) {
  notes.push({
    title: "",
    body: ""
  });
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes(notes, filters);
});

document.querySelector("#search-text").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function(e) {
  console.log(e.target.value);
});
