"use strict";

let data;
const processData = () => {
  data = "1234546684";
};
processData();
console.log(data);

// READ EXISTING NOTES FROM LOCALSTORAGE
const getSavedNotes = function() {
  const notesJSON = localStorage.getItem("notes");

  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (e) {
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

  noteIndex > -1 ? notes.splice(noteIndex, 1) : null;
};

// GENERATE THE DOM STRUCTURE FOR A NOTE
const generateNoteDom = function(note) {
  const noteEl = document.createElement("a");
  const textEl = document.createElement("a");
  const statusEl = document.createElement("p");

  // SETUP THE NOTE TITLE TEXT
  note.title.length
    ? (textEl.textContent = note.title)
    : (textEl.textContent = "Unnamed note");

  textEl.classList.add("list-item__title");
  noteEl.appendChild(textEl);

  // Setup the link
  noteEl.setAttribute("href", `/edit.html#${note.id}`);
  noteEl.classList.add("list-item");

  // Setup the status message
  statusEl.textContent = generateLastEdited(note.updatedAt);
  statusEl.classList.add("list-itme__subtitle");
  noteEl.appendChild(statusEl);

  return noteEl;
};

// SORT YOUR NOTES BY ONE OF THREE WAYS ACCORDING TO OPTION VALUE IN INDEX.HTML
const sortNotes = function(notes, sortBy) {
  if (sortBy === "byEdited") {
    return notes.sort(function(a, b) {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
      // return b.updatedAt - a.updatedAt;
    });
  } else if (sortBy === "byCreated") {
    return notes.sort(function(a, b) {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "alphabetically") {
    return notes.sort(function(a, b) {
      // if (a.title.toLowerCase() < b.title.toLowerCase()) {
      //   return -1;
      // } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      //   return 1;
      // } else {
      //   return 0;
      // }
      return b.updatedAt - a.updatedAt;
    });
  }
};

// FILTERING NOTES
const renderNotes = function(notes, filters) {
  const notesEl = document.querySelector("#notes");
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filters.renderTodos.toLowerCase());
  });

  notesEl.innerHTML = "";

  if (filteredNotes.length > 0) {
    filteredNotes.forEach(function(note) {
      const noteEl = generateNoteDom(note);
      notesEl.appendChild(noteEl);
    });
  } else {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "No notes to show";
    emptyMessage.classList.add("empty-message");
    notesEl.appendChild(emptyMessage);
  }
};

// GENERATE THE LAST EDITED MESSAGE
const generateLastEdited = function(timeStamp) {
  return `Last edited ${moment(timeStamp).fromNow()}`;
};
