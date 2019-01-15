import moment from "moment";
import { getFilters } from "./filters";
import { sortNotes, getNotes } from "./notes";

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

// FILTERING NOTES
const renderNotes = function() {
  const notesEl = document.querySelector("#notes");
  const filters = getFilters();
  const notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  console.log(filteredNotes);
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

const initializedEditPage = noteId => {
  const titleEl = document.querySelector("#note-title");
  const timeEl = document.querySelector("#time");
  const bodyEl = document.querySelector("#note-body");
  const notes = getNotes();
  const note = notes.find(function(note) {
    return note.id === noteId;
  });

  // IN CASE ID IS WRONG, RELOCATE TO MAIN PAGE
  if (!note) {
    location.assign("/index.html");
  }

  titleEl.value = note.title;
  bodyEl.value = note.body;
  timeEl.textContent = generateLastEdited(note.updatedAt);
};

// GENERATE THE LAST EDITED MESSAGE
const generateLastEdited = function(timeStamp) {
  return `Last edited ${moment(timeStamp).fromNow()}`;
};

export {
  generateNoteDom,
  renderNotes,
  generateLastEdited,
  initializedEditPage
};
