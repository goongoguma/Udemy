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

// REMOVE A NOTE FROM THE LIST
const removeNote = function(id) {
  const noteIndex = notes.findIndex(function(note) {
    return note.id === id;
  });
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// GENERATE THE DOM STRUCTURE FOR A NOTE
const generateNoteDom = function(note) {
  const noteEl = document.createElement("div");
  const textEl = document.createElement("a");
  const button = document.createElement("button");

  // Setup the remove note button
  button.textContent = "X";
  noteEl.appendChild(button);
  button.addEventListener("click", function() {
    // REMOVE
    removeNote(note.id);
    // SAVE
    saveNotes(notes);
    // RERENDER
    renderNotes(notes, filters);
  });

  // Setup the note title text
  if (note.title.length) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = "Unnamed note";
  }
  textEl.setAttribute("href", `/edit.html#${note.id}`);
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

// GENERATE THE LAST EDITED MESSAGE
const generateLastEdited = function(timeStamp) {
  return `Last edited ${moment(timeStamp).fromNow()}`;
};
