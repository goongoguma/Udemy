// READ EXISTING NOTES FROM LOCALSTORAGE
const getSavedNotes = function() {
  const notesJSON = localStorage.getItem("notes");
  if (notesJSON) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

// SAVE THE NOTES TO LOCALSTORAGE
const saveNotes = function(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
};

// GENERATE THE DOM STRUCTURE FOR A NOTE
const generateNoteDom = function(note) {
  const noteEl = document.createElement("div");
  const textEl = document.createElement("span");
  const button = document.createElement("button");

  // Setup the remove note button
  button.textContent = "X";
  noteEl.appendChild(button);

  // Setup the note title text
  if (note.title.length) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = "Unnamed note";
  }

  noteEl.appendChild(textEl);

  return noteEl;
};

// FILTERING NOTES
const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filters.renderTodos.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function(note) {
    const noteEl = generateNoteDom(note);
    document.querySelector("#notes").appendChild(noteEl);
  });
};
