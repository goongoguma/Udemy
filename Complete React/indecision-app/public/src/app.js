console.log('App.js is running!');

// JSX(JavaScript Syntax Extension) - JavaScript XML
var template = ( // in React, elements have to be bound in one root element
<div>
  <h1>Indecision App</h1> 
  <p>This is some info</p>
  <ol>
    <li>Item one</li>
    <li>Item two</li>
  </ol>
</div>
);

// Challenge1 : Create a templateTwo var JSX expression using
// div
//  h1 -> My name
//  p -> Age :
//  p -> Location :
// Render templateTwo instead of template

var templateTwo = (
<div>
  <h1> My Name : Jay An </h1>
  <p> Age : 29 </p>
  <p> Location : Incheon </p>
</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot); // This is where we are gonna render out application