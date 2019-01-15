const todo = {
  id: "abcdefg",
  text: "Hello World",
  completed: false
};

// Destructuring
const {
  text: todoText,
  completed,
  details = "No details provided",
  ...others
} = todo;

console.log(todoText); // "Hello World"
console.log(completed); // false
console.log(details); // "No details provided"
console.log(others); // {id: "abcdefg" }

// also we can use destructuring in array
const age = [65, 0, , , 27, 48, 21];
const [first, second, , forth = 30, ...otherAges] = age;
console.log(first); // 65
console.log(second); // 0
console.log(forth); // 30
console.log(otherAges); // [27, 48, 21]

// Destructuring also can be used in function
const printTodo = ({ text, completed }) => {
  console.log(`${text}: ${completed}`); // Hello World: false
};
printTodo(todo);
