"use strict";
let todos = getSaveTodos();

// Starts
let filter = {
  filteredText: ""
};

renderTodos(todos, filter);

// SEARCH TODO
document.querySelector("#search-id").addEventListener("input", e => {
  filter.filteredText = e.target.value;
});

// ADD EVENT
document.querySelector("#add-todo").addEventListener("submit", e => {
  e.preventDefault();
  const newTodo = {
    id: uuidv4(),
    text: e.target.elements.todo.value.trim(),
    completed: false
  };
  if (newTodo.text.length > 0) {
    todos.push(newTodo);
    saveTodos(todos);
    renderTodos(todos, filter);
    e.target.elements.todo.value = "";
  } else {
    alert("Please enter the text");
  }
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
