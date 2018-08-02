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

////////////////////////////////////////////////////////////
//// Exploring JSX
// Challenge1 : Create a templateTwo var JSX expression using
// div
//  h1 -> My name
//  p -> Age :
//  p -> Location :
// Render templateTwo instead of template

// var user = {
//   name: 'Andrew',
//   age: 26,
//   location: 'Phili'
// };
// var templateTwo = (
// <div>
//   <h1>{user.name}</h1>
//   <p> Age : {user.age} </p>
//   <p> Location : {user.location} </p>
// </div>
// );

////////////////////////////////////////////////////////////
//// JSX Expressions
// Challenge2 : Create an app object title/subtitle
// use title/subtitle in the template
// render template

// var game = {
//   title : 'counter strike',
//   subtitle : 'global offensive'
// }

// var app = (
//   <div>
//     <h1>{game.title}</h1>
//     <p>{game.subtitle}</p>
//   </div>
// );

///////////////////////////////////////////////////////////
//// Conditional Rendering in JSX

/// if statements
// var user = {
//   name: 'Andrew',
//   age: 26,
// };
// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   } 
// }
// var templateTwo = (
// <div>
//   <h1>{user.name}</h1>
//   <p> Age : {user.age} </p>
//   {getLocation(user.location)}
// </div>
// );

/// ternary operators
// var user = {
//   name: 'Andrew',
//   age: 26,
// };
// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   } 
// }
// var templateTwo = (
// <div>
//   <h1>{user.name ? user.name : 'Anonymous'}</h1>
//   <p> Age : {user.age} </p>
//   {getLocation(user.location)}
// </div>
// );

/// logical and operator
// undefined, boolean, null are ignored in JSX
// var user = {
//   name: 'Andrew',
//   age: 26,
//   location: 'Phili'
// };
// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   } 
// }
// var templateTwo = (
// <div>
//   <h1>{user.name ? user.name : 'Anonymous'}</h1>
//   {(user.age && user.age >= 18) && <p> Age : {user.age} </p>}
//   {getLocation(user.location)}
// </div>
// );

/// Challenge3 : Only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" unless "No options"
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
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

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot); // This is where we are gonna render out application
