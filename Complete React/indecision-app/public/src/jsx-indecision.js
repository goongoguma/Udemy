// console.log('App.js is running!');

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
//in React, className is used instead of class 
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
// var app = {
//   title : 'Indecision App',
//   subtitle : 'Put your life in the hands of a computer',
//   options: []
// };
// const onFormSubmit = (e) => {
//   e.preventDefault(); // prevents page refresh 

//   const option = e.target.elements.option.value; //this points to the element that the event started on

//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = '';
//     render();
//   } 
// };

// const onRemoveAll = () => {
//   app.options = [];
//   render();
// };

// const appRoot = document.getElementById('app');

// const render = () => {
//   var template = ( 
//     <div>
//       <h1>{app.title}</h1> 
//       {app.subtitle && <p>Subtitle : {app.subtitle}</p>}
//       <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//       <p>{app.options.length}</p>
//       <button onClick={onRemoveAll}>Remove All</button>
//       <ol>
//         <li>Item one</li>
//         <li>Item two</li>
//       </ol>
//       <form onSubmit={onFormSubmit}>
//        <input type="text" name="option"/>
//        <button>Add Option</button>
//       </form>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };
// render();

///////////////////////////////////////////////////
//// Arrays in JSX
// var app = {
//   title : 'Indecision App',
//   subtitle : 'Put your life in the hands of a computer',
//   options: []
// };
// const onFormSubmit = (e) => {
//   e.preventDefault(); // prevents page refresh 

//   const option = e.target.elements.option.value; //this points to the element that the event started on

//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = '';
//     render();
//   } 
// };

// const onRemoveAll = () => {
//   app.options = [];
//   render();
// };

// const appRoot = document.getElementById('app');

// // const numbers = [55, 101, 1000];

// const render = () => {
//   var template = ( 
//     <div>
//       <h1>{app.title}</h1> 
//       {app.subtitle && <p>Subtitle : {app.subtitle}</p>}
//       <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//       <p>{app.options.length}</p>
//       <button onClick={onRemoveAll}>Remove All</button>
//       {
//         //[99, 98, 97,'Mike Smith'] this is same as {99}{98}{97}
//         //[<p key='1'>a</p>, <p key='2'>b</p>, <p key='3'>c</p>] // JSX in array need key identifier
//         // numbers.map((number) => {
//         //   return <p key={number}>Number: {number}</p>
//         // })
//       }
//       <ol>
//       {/* map over app.options getting back an array of lis (set key and text) */}
//       {
//         app.options.map((string) => <li key={string}>Items: {string}</li>)
//       }
//       </ol>
//       <form onSubmit={onFormSubmit}>
//        <input type="text" name="option"/>
//        <button>Add Option</button>
       
//       </form>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };
// render();

///////////////////////////////////////////////////
//// Picking an Option
// var app = {
//   title : 'Indecision App',
//   subtitle : 'Put your life in the hands of a computer',
//   options: []
// };
// const onFormSubmit = (e) => {
//   e.preventDefault(); // prevents page refresh 

//   const option = e.target.elements.option.value; //this points to the element that the event started on

//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = '';
//     render();
//   } 
// };

// const onRemoveAll = () => {
//   app.options = [];
//   render();
// };

// const onMakeDecision = () => { // the function generate a random number
//  const randomNum = Math.floor(Math.random() * app.options.length);
//  const option = app.options[randomNum];
//  alert(option);
// };

// const appRoot = document.getElementById('app');

// const render = () => {
//   var template = ( 
//     <div>
//       <h1>{app.title}</h1> 
//       {app.subtitle && <p>Subtitle : {app.subtitle}</p>}
//       <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//       <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
//       <button onClick={onRemoveAll}>Remove All</button>
//       <ol>
//       {app.options.map((string) => <li key={string}>{string}</li>)}
      
//       </ol>
//       <form onSubmit={onFormSubmit}>
//        <input type="text" name="option"/>
//        <button>Add Option</button>
       
//       </form>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };
// render();

///////////////////////////////////////////////////
//// Picking an Option
var app = {
  title : 'Indecision App',
  subtitle : 'Put your life in the hands of a computer',
  options: []
};
const onFormSubmit = (e) => {
  e.preventDefault(); // prevents page refresh 

  const option = e.target.elements.option.value; //this points to the element that the event started on

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  } 
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => { // the function generate a random number
 const randomNum = Math.floor(Math.random() * app.options.length);
 const option = app.options[randomNum];
 alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
  var template = ( 
    <div>
      <h1>{app.title}</h1> 
      {app.subtitle && <p>Subtitle : {app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
      {app.options.map((string) => <li key={string}>{string}</li>)}
      
      </ol>
      <form onSubmit={onFormSubmit}>
       <input type="text" name="option"/>
       <button>Add Option</button>
       
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
render();

