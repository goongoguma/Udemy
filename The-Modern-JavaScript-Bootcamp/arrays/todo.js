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

console.log(`You have ${todos.length} todos!`);

for (const i = 0; i < todos.length; i++) {
  console.log(`Todo ${i + 1}: ${todos[i]}`);
}
