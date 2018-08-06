class Counter extends React.Component {
constructor(props) {
  super(props);
  this.handleAddOne = this.handleAddOne.bind(this);
  this.handleMinusOne = this.handleMinusOne.bind(this);
  this.handleReset = this.handleReset.bind(this);
  this.state = {
    count: 0,
  };
 };
handleAddOne() {
 this.setState((prev) => { //prev is a state object before the changes have been applied
   return {
    count: prev.count + 1 //.count is current count value
   };
 }); // setState allows us to manupulate the object after that the component will be rendered automatically
 }
handleMinusOne() {
  // call this.setState decrement the count by 1
  this.setState((prev) => {
    return {
      count: prev.count -1
    };
  });
 }
handleReset() {
   this.setState(() => {
     return {
       count: 0
     }
   });
  }
render() {
  return(
    <div>
    <h1>Count: {this.state.count}</h1>
    <button onClick={this.handleAddOne}>+1</button>
      <button onClick={this.handleMinusOne}>-1</button>
      <button onClick={this.handleReset}>reset</button>
    </div>
  );
 }
}

ReactDOM.render(<Counter />, document.getElementById('app'));


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