console.log('App.js is running!');

// JSX(JavaScript Syntax Extension) - JavaScript XML
// var template = <p>This is JSX from app.js!</p>;
var template = React.createElement(
  "h1",
  { id: "someid" },
  "This is JSX from app.js"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot); // This is where we are gonna render out application