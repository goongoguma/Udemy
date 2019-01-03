"use strict";

// FETCH EXISTING TODOS FROM LOCALSTORAGE
const getSaveTodos = () => {
  const todosJSON = localStorage.getItem("todos");
  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    return [];
  }
};

// SAVE TODOS TO LOCALSTORAGE
const saveTodos = todos => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// RENDER APPLICATION TODOS BASED ON FILTERS
const renderTodos = (todos, filter) => {
  const filteredResult = todos.filter(todo =>
    todo.text.toLowerCase().includes(filter.filteredText.toLowerCase())
  );
  console.log(filteredResult);

  const incompleteTodos = filteredResult.filter(todo => !todo.completed);

  document.querySelector("#todo-lists").innerHTML = "";

  generateSummaryDOM(incompleteTodos);

  filteredResult.forEach(result => {
    generateTodoDOM(result);
  });
};

// REMOVE TODO BY ID
const removeTodo = function(result) {
  const removedIndex = todos.findIndex(todo => todo.id === result.id);
  if (removedIndex > -1) {
    return todos.splice(removedIndex, 1);
  }
};

// TOGGLE THE COMPLETED VALUE FOR A GIVEN TODO
const toggleTodo = function(result) {
  const toggleIndex = todos.find(todo => todo.id === result.id);
  if (toggleIndex) {
    toggleIndex.completed = !toggleIndex.completed;
  }
};

// GET THE DOM ELEMENTS FOR AN INDIVIDUAL NOTE
const generateTodoDOM = result => {
  const todoEl = document.createElement("div");
  const todoCheck = document.createElement("input");
  const todoText = document.createElement("span");
  const todoButton = document.createElement("button");

  // SETUP CHECKBOX
  todoCheck.setAttribute("type", "checkbox");
  todoEl.appendChild(todoCheck);

  // when the input is checked -> true/ not checked -> false
  todoCheck.checked = result.completed;

  todoCheck.addEventListener("change", () => {
    toggleTodo(result);
    saveTodos(todos);
    renderTodos(todos, filter);
  });

  // SETUP TEXT
  todoText.textContent = result.text;
  todoEl.appendChild(todoText);

  // SETUP REMOVE BUTTON
  todoButton.textContent = "remove";

  todoButton.addEventListener("click", () => {
    removeTodo(result);
    saveTodos(todos);
    renderTodos(todos, filter);
  });

  todoEl.appendChild(todoButton);

  document.querySelector("#todo-lists").appendChild(todoEl);
};

// // GET THE DOM ELEMENTS FOR LIST SUMMARY
const generateSummaryDOM = incompleteTodos => {
  const summaryPtag = document.createElement("h2");
  summaryPtag.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector("#todo-lists").appendChild(summaryPtag);
};
