let todos = [];

const todosJSON = localStorage.getItem("todos");

if (todosJSON) {
  todos = JSON.parse(todosJSON);
}

// Starts
let filter = {
  filteredText: ""
};

const searchText = function(todos, filter) {
  const filteredResult = todos.filter(function(todo) {
    return todo.text.toLowerCase().includes(filter.filteredText.toLowerCase());
  });
  console.log(filteredResult);

  const incompleteTodos = filteredResult.filter(function(todo) {
    return !todo.completed;
  });

  document.querySelector("#todo-lists").innerHTML = "";

  const summaryPtag = document.createElement("h2");
  summaryPtag.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector("#todo-lists").appendChild(summaryPtag);

  filteredResult.forEach(function(result) {
    const todoText = document.createElement("p");
    todoText.textContent = result.text;
    document.querySelector("#todo-lists").appendChild(todoText);
  });
};

searchText(todos, filter);

// let incompleteTodos = todos.filter(function(todo) {
//   return !todo.completed;
// });

// SEARCH TODO
document.querySelector("#search-id").addEventListener("input", function(e) {
  filter.filteredText = e.target.value;
  searchText(todos, filter);
});

// ADD EVENT
document.querySelector("#add-todo").addEventListener("submit", function(e) {
  e.preventDefault();
  const newTodo = {
    text: e.target.elements.todo.value,
    completed: false
  };
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
  searchText(todos, filter);
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
      searchText(completeTrue, filter);
    } else {
      searchText(todos, filter);
    }
  });
