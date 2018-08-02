console.log('App.js is running!');

// JSX(JavaScript Syntax Extension) - JavaScript XML
// const template = ( // in React, elements have to be bound in one root element
// <div>
//   <h1>Indecision App</h1> 
//   <p>This is some info</p>
//   <ol>
//     <li>Item one</li>
//     <li>Item two</li>
//   </ol>
// </div>
// );

/// Events and Attributes
// in React, className is used instead of class 
// let count = 0;
// const addOne = () => console.log('addOne');
// const minusOne = () => console.log("MINUSONE");
// const reset = () => console.log("RESET");

// const templateTwo = (
//   <div>
//   <h1>Count: {count}</h1>
//   <button onClick={addOne}>+1</button> 
//   <button onClick={minusOne}>-1</button> 
//   <button onClick={reset}>reset</button>
//   </div>
// );

/// Manual Data Binding
let count = 0;
const addOne = () => console.log('addOne');
const minusOne = () => console.log("MINUSONE");
const reset = () => console.log("RESET");

const templateTwo = (
  <div>
  <h1>Count: {count}</h1>
  <button onClick={addOne}>+1</button> 
  <button onClick={minusOne}>-1</button> 
  <button onClick={reset}>reset</button>
  </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot); // This is where we are gonna render out application