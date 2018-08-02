'use strict';

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

///////////////////////////////////////////////////////
//// Events and Attributes
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

////////////////////////////////////////////////////////
//// Manual Data Binding
// JSX does not have data built-in binding
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// }
// const minusOne = () => {
//   // subtract 1 from count - rerender
//   count--;
//   renderCounterApp();
// }
// const reset = () => {
//   count = 0;
//   renderCounterApp();
//   // set count to 0 a rerender
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button> 
//       <button onClick={minusOne}>-1</button> 
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot); // This is where we are gonna render out application
// };
// renderCounterApp();


/// ///////////////////////////////////////////////////
//// Forms and Inputs
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault(); // prevents page refresh 

  var option = e.target.elements.option.value; //this points to the element that the event started on

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      'Subtitle : ',
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'Item one'
      ),
      React.createElement(
        'li',
        null,
        'Item two'
      )
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};
render();
