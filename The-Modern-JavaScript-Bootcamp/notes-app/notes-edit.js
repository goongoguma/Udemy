const titleEl = document.querySelector("#note-title");
const timeEl = document.querySelector("#time");
const bodyEl = document.querySelector("#note-body");
const removeEl = document.querySelector("#remove-note");
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(function(note) {
  return note.id === noteId;
});

// IN CASE ID IS WRONG, RELOCATE TO MAIN PAGE
if (note === undefined) {
  location.assign("/index.html");
}

titleEl.value = note.title;
bodyEl.value = note.body;

titleEl.addEventListener("input", function(e) {
  note.title = e.target.value;
  note.updatedAt = moment().valueOf();
  timeEl.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

timeEl.textContent = generateLastEdited(note.updatedAt);

bodyEl.addEventListener("input", function(e) {
  note.body = e.target.value;
  note.updatedAt = moment().valueOf();
  timeEl.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

removeEl.addEventListener("click", function() {
  removeNote(note.id);
  saveNotes(notes);
  location.assign("/index.html");
});

// in order to sync data across pages, use window object
// storage only fires on the other pages
// 다른 페이지에서 작동되는 코드들. 변수들의 값이 새롭게 할당된다.
window.addEventListener("storage", function(e) {
  console.log(e);
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    let note = notes.find(function(note) {
      return note.id === noteId;
    });

    // IN CASE ID IS WRONG, RELOCATE TO MAIN PAGE
    if (note === undefined) {
      location.assign("/index.html");
    }

    titleEl.value = note.title;
    bodyEl.value = note.body;
    timeEl.textContent = generateLastEdited(note.updatedAt);
  }
});
