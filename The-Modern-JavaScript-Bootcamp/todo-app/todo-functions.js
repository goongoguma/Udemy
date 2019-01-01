// FETCH EXISTING TODOS FROM LOCALSTORAGE
const getSaveTodos = function() {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

// // SAVE TODOS TO LOCALSTORAGE
const saveTodos = function(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// // RENDER APPLICATION TODOS BASED ON FILTERS
const renderTodos = function(todos, filter) {
  const filteredResult = todos.filter(function(todo) {
    return todo.text.toLowerCase().includes(filter.filteredText.toLowerCase());
  });
  console.log(filteredResult);

  const incompleteTodos = filteredResult.filter(function(todo) {
    return !todo.completed;
  });

  document.querySelector("#todo-lists").innerHTML = "";

  generateSummaryDOM(incompleteTodos);

  filteredResult.forEach(function(result) {
    generateTodoDOM(result);
  });
};

// // GET THE DOM ELEMENTS FOR AN INDIVIDUAL NOTE
const generateTodoDOM = function(result) {
  const todoText = document.createElement("p");
  todoText.textContent = result.text;
  document.querySelector("#todo-lists").appendChild(todoText);
};

// // GET THE DOM ELEMENTS FOR LIST SUMMARY
const generateSummaryDOM = function(incompleteTodos) {
  const summaryPtag = document.createElement("h2");
  summaryPtag.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector("#todo-lists").appendChild(summaryPtag);
};
