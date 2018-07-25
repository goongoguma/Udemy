const sayHello = function() {
  console.log('Hello');
}

const sayHello = () => {
  console.log('Hello');
}

// One line function does not need braces 
const sayHello = () => console.log('Hello');

// One line returns 
const sayHello = () => 'Hello';

// Return Object
const sayHello = () => ({ meg: 'Hello'});

// Single param does not need parenthesis
const sayHello = name => console.log(`Hello ${name}`);

// Multiple params need parenthesis
const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
sayHello('Brad', 'Traversy');

const users = ['Nathan', 'John', 'William'];

const nameLengths = users.map(function(name) {
  return name.length;
});

// Shorter
const nameLengths = users.maps((name) => {
  return name.length;
});

// Shortest
const nameLengths = users.map(name => name.length);
console.log(nameLengths);