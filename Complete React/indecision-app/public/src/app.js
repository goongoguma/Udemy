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

/// Challenge3 : Only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" unless "No options"
var app = {
    title : 'Indecision App',
    subtitle : 'Put your life in the hands of a computer',
    options: ['One', 'Two']
  };
  var template = ( 
    <div>
      <h1>{app.title}</h1> 
      {app.subtitle && <p>Subtitle : {app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
    </div>
    );
  
 
  
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot); // This is where we are gonna render out application