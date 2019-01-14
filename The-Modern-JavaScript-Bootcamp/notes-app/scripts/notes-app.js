"use strict";

let notes = getSavedNotes();

const filters = {
  renderTodos: "",
  sortBy: "byEdited"
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", e => {
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
  saveNotes(notes);
  location.assign(`/edit.html#${id}`);
});

document.querySelector("#search-text").addEventListener("input", e => {
  filters.renderTodos = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", e => {
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

// 글 수정페이지에서 제목이 바뀔때 다른 탭에 있는 메인탭에서도 제목을 같이 바꿔주기
window.addEventListener("storage", e => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});