// Create an array with five todos
// You have x todos
// Print the first and second to last items -> Todo: todoText

const todos = [
  "washing dishes",
  "cleaning up the room",
  "studying javascript",
  "writing cv",
  "searching for a job"
];

// Delete the 3rd item
todos.splice(2, 1);
// Add a new item onto the end
todos.push("preparing for the interview");
// Remove the first item from the list
todos.shift();

console.log(`You have ${todos.length} todos!`);

// todos.forEach(function(item, index) {
//   console.log(`${index + 1}. ${item}`);
// });

for (let i = 0; i < todos.length; i++) {
  console.log(`${i + 1}. ${todos[i]}`);
}
