// count - setup default prop value to 0

class Counter extends React.Component {
constructor(props) {
  super(props);
  this.handleAddOne = this.handleAddOne.bind(this);
  this.handleMinusOne = this.handleMinusOne.bind(this);
  this.handleReset = this.handleReset.bind(this);
  this.state = {
    count: props.count // count passed down a way to configure the default state down way the bottom 
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
      count: prev.count - 1
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

Counter.defaultProps = {
  count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'));


