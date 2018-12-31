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

// Challenege
// sort todos according to the boolean value in the array
const sortTodos = function(todos) {
  todos.sort(function(a, b) {
    return a.completed - b.completed;
  });
};

sortTodos(todos);
console.log(todos);

// 1. Convert array to array of objects -> text, completed(true/false)
// 2. Create function to remove a todo by text value

// const deleteTodo = function(todos, doneText) {
//   return todos.filter(function(todo, index) {
//     return todo.text.toLowerCase() !== doneText.toLowerCase();
//   });
// };

// const todoList = deleteTodo(todos, "washing dishes");
// console.log(todoList);

// // showing only completed: false
// let getThingsTodo = function(todos) {
//   return todos.filter(function(todo) {
//     return !todo.completed;
//   });
// };

// console.log(getThingsTodo(todos));
