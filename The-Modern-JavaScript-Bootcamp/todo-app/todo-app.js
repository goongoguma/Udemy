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

// You have 2 todos left (p element)
// Add a p for each todo above (use text value)

let incompleteTodos = todos.filter(function(todo) {
  return !todo.completed;
});

const summaryPtag = document.createElement("h2");
summaryPtag.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector("body").appendChild(summaryPtag);

todos.forEach(function(todo) {
  const todoText = document.createElement("p");
  todoText.textContent = todo.text;
  document.querySelector("body").appendChild(todoText);
});

// Listen for ne todo creation
document.querySelector("button").addEventListener("click", function(e) {
  console.log("todo has been added");
});
