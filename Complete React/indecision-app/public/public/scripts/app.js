'use strict';

console.log('App.js is running!');

// JSX(JavaScript Syntax Extension) - JavaScript XML
var template = // in React, elements have to be bound in one root element
React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
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
  )
);

// Challenge1 : Create a templateTwo var JSX expression using
// div
//  h1 -> My name
//  p -> Age :
//  p -> Location :
// Render templateTwo instead of template

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' My Name : Jay An '
  ),
  React.createElement(
    'p',
    null,
    ' Age : 29 '
  ),
  React.createElement(
    'p',
    null,
    ' Location : Incheon '
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot); // This is where we are gonna render out application
