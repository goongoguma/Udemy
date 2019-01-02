let notes = getSavedNotes();

const filters = {
  renderTodos: ""
};

renderNotes(notes, filters);

console.log(uuidv4());

document.querySelector("#create-note").addEventListener("click", function(e) {
  const id = uuidv4();
  notes.push({
    // create unique id using uuidv4
    id,
    title: "",
    body: ""
  });
  saveNotes(notes);
  location.assign(`/edit.html#${id}`);
});

document.querySelector("#search-text").addEventListener("input", function(e) {
  filters.renderTodos = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function(e) {
  console.log(e.target.value);
});

// 글 수정페이지에서 제목이 바뀔때 다른 탭에 있는 메인탭에서도 제목을 같이 바꿔주기
window.addEventListener("storage", function(e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});
