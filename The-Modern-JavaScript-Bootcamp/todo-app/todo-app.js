const todos = [
  {
    text: "washing dishes",
    completed: false
  },
  {
    text: "cleaning up the room",
    completed: true
  },
  {
    text: "studying javascript",
    completed: true
  },
  {
    text: "writing cv",
    completed: false
  },
  {
    text: "searching for a job",
    completed: true
  }
];

// Filtering Challenge
// Setup a div contain for todos
// Setup filters (searchText) and wire up a new filter input change it
// Create a renderTodos function to render and rerender the latest filtered data

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
  summaryPtag.textContent = `You have ${filteredResult.length} todos left`;
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

//Ends

// BUTTON EVENT
document.querySelector("#add-todo").addEventListener("click", function(e) {
  console.log("todo has been added");
});

// INPUT EVENT
document.querySelector("#todo-input").addEventListener("input", function(e) {
  console.log(e.target.value);
});

// SEARCH TODO
document.querySelector("#search-id").addEventListener("input", function(e) {
  filter.filteredText = e.target.value;
  searchText(todos, filter);
});
