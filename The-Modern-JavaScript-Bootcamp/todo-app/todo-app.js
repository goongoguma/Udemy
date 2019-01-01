let todos = getSaveTodos();

// Starts
let filter = {
  filteredText: ""
};

renderTodos(todos, filter);

// let incompleteTodos = todos.filter(function(todo) {
//   return !todo.completed;
// });

// SEARCH TODO
document.querySelector("#search-id").addEventListener("input", function(e) {
  filter.filteredText = e.target.value;
  renderTodos(todos, filter);
});

// ADD EVENT
document.querySelector("#add-todo").addEventListener("submit", function(e) {
  e.preventDefault();
  const newTodo = {
    text: e.target.elements.todo.value,
    completed: false
  };
  todos.push(newTodo);
  saveTodos(todos);
  renderTodos(todos, filter);
  e.target.elements.todo.value = "";
});

// CHECKBOX
document
  .querySelector("#hide-completed")
  .addEventListener("change", function(e) {
    if (e.target.checked) {
      const completeTrue = todos.filter(function(todo) {
        return !todo.completed;
      });
      renderTodos(completeTrue, filter);
    } else {
      renderTodos(todos, filter);
    }
  });
