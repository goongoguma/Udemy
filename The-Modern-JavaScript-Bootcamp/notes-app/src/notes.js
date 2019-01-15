import uuidv4 from "uuid/v4";
import moment from "moment";

let notes = null;

// READ EXISTING NOTES FROM LOCALSTORAGE
const loadNotes = function() {
  const notesJSON = localStorage.getItem("notes");

  // try {
  //   return notesJSON ? JSON.parse(notesJSON) : [];
  // } catch (e) {
  //   return [];
  // }
  if (notesJSON) {
    return notesJSON ? JSON.parse(notesJSON) : null;
  } else {
    return [];
  }
};

// Expose data stored in the array (Expose notes from module)
notes = loadNotes();

const getNotes = () => notes;

// SAVE THE NOTES TO LOCALSTORAGE
const saveNotes = function() {
  localStorage.setItem("notes", JSON.stringify(notes));
};

// createNote function contains moment and uuidv4 libraries
const createNote = () => {
  const id = uuidv4();
  const timeStamp = moment().valueOf();
  notes.push({
    // create unique id using uuidv4
    id,
    title: "",
    body: "",
    createdAt: null,
    updatedAt: null
  });
  saveNotes();

  return id;
};

// REMOVE A NOTE FROM THE LIST
const removeNote = function(id) {
  const noteIndex = notes.findIndex(function(note) {
    return note.id === id;
  });

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
    saveNotes();
  }
};

// SORT YOUR NOTES BY ONE OF THREE WAYS ACCORDING TO OPTION VALUE IN INDEX.HTML
const sortNotes = function(sortBy) {
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
  } else {
    return notes;
  }
};

const updateNote = (id, updates) => {
  const note = notes.find(note => note.id === id);
  if (!note) {
    return undefined;
  }
  if (typeof updates.title === "string") {
    note.title = updates.title;
    note.updatedAt = moment().valueOf();
  }
  if (typeof updates.body === "string") {
    note.body = updates.body;
    note.updatedAt = moment().valueOf();
  }
  saveNotes();
  return note;
};

export { getNotes, createNote, removeNote, sortNotes, updateNote };
