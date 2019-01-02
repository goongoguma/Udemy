const notes = getSavedNotes();

const filters = {
  renderTodos: ""
};

renderNotes(notes, filters);

console.log(uuidv4());

document.querySelector("#create-note").addEventListener("click", function(e) {
  notes.push({
    // create unique id using uuidv4
    id: uuidv4(),
    title: "",
    body: ""
  });
  saveNotes(notes);
  renderNotes(notes, filters);
});

document.querySelector("#search-text").addEventListener("input", function(e) {
  filters.renderTodos = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function(e) {
  console.log(e.target.value);
});
