let todos = getSaveTodos();

// Starts
let filter = {
  filteredText: ""
};

renderTodos(todos, filter);

// SEARCH TODO
document.querySelector("#search-id").addEventListener("input", e => {
  filter.filteredText = e.target.value;
  renderTodos(todos, filter);
});

// ADD EVENT
document.querySelector("#add-todo").addEventListener("submit", e => {
  e.preventDefault();
  const newTodo = {
    id: uuidv4(),
    text: e.target.elements.todo.value,
    completed: false
  };
  todos.push(newTodo);
  saveTodos(todos);
  renderTodos(todos, filter);
  e.target.elements.todo.value = "";
});

// CHECKBOX
document.querySelector("#hide-completed").addEventListener("change", e => {
  if (e.target.checked) {
    const completeTrue = todos.filter(todo => !todo.completed);
    renderTodos(completeTrue, filter);
  } else {
    renderTodos(todos, filter);
  }
});
