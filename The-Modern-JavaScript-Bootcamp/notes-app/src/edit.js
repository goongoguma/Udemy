import { initializedEditPage, generateLastEdited } from "./views";
import { updateNote, removeNote } from "./notes";

const titleEl = document.querySelector("#note-title");
const timeEl = document.querySelector("#time");
const bodyEl = document.querySelector("#note-body");
const removeEl = document.querySelector("#remove-note");
const noteId = location.hash.substring(1);

initializedEditPage(noteId);

titleEl.addEventListener("input", function(e) {
  const note = updateNote(noteId, {
    title: e.target.value
  });

  timeEl.textContent = generateLastEdited(note.updatedAt);
});

bodyEl.addEventListener("input", function(e) {
  const note = updateNote(noteId, {
    body: e.target.value
  });
  saveNotes(notes);
});

removeEl.addEventListener("click", function() {
  removeNote(noteId);
  location.assign("/index.html");
});

// in order to sync data across pages, use window object
// storage only fires on the other pages
// 다른 페이지에서 작동되는 코드들. 변수들의 값이 새롭게 할당된다.
window.addEventListener("storage", function(e) {
  console.log(e);
  if (e.key === "notes") {
    initializedEditPage(noteId);
  }
});
