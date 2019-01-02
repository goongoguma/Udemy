// FETCH EXISTING TODOS FROM LOCALSTORAGE
const getSaveTodos = function() {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

// SAVE TODOS TO LOCALSTORAGE
const saveTodos = function(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// RENDER APPLICATION TODOS BASED ON FILTERS
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

// REMOVE TODO BY ID
const removeTodo = function(result) {
  const removedIndex = todos.findIndex(function(todo) {
    return todo.id === result.id;
  });
  if (removedIndex > -1) {
    return todos.splice(removedIndex, 1);
  }
};

// TOGGLE THE COMPLETED VALUE FOR A GIVEN TODO
const toggleTodo = function(result) {
  const toggleIndex = todos.find(function(todo) {
    return todo.id === result.id;
  });
  if (toggleIndex !== undefined) {
    toggleIndex.completed = !toggleIndex.completed;
  }
};

// GET THE DOM ELEMENTS FOR AN INDIVIDUAL NOTE
const generateTodoDOM = function(result) {
  const todoEl = document.createElement("div");
  const todoCheck = document.createElement("input");
  const todoText = document.createElement("span");
  const todoButton = document.createElement("button");

  // SETUP CHECKBOX
  todoCheck.setAttribute("type", "checkbox");
  todoEl.appendChild(todoCheck);

  // when the input is checked -> true/ not checked -> false
  todoCheck.checked = result.completed;

  todoCheck.addEventListener("change", function() {
    toggleTodo(result);
    saveTodos(todos);
    renderTodos(todos, filter);
  });

  // SETUP TEXT
  todoText.textContent = result.text;
  todoEl.appendChild(todoText);

  // SETUP REMOVE BUTTON
  todoButton.textContent = "remove";

  todoButton.addEventListener("click", function() {
    removeTodo(result);
    saveTodos(todos);
    renderTodos(todos, filter);
  });

  todoEl.appendChild(todoButton);

  document.querySelector("#todo-lists").appendChild(todoEl);
};

// // GET THE DOM ELEMENTS FOR LIST SUMMARY
const generateSummaryDOM = function(incompleteTodos) {
  const summaryPtag = document.createElement("h2");
  summaryPtag.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector("#todo-lists").appendChild(summaryPtag);
};
