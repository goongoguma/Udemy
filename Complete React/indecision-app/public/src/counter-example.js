// count - setup default prop value to 0

class Counter extends React.Component {
constructor(props) {
  super(props);
  this.handleAddOne = this.handleAddOne.bind(this);
  this.handleMinusOne = this.handleMinusOne.bind(this);
  this.handleReset = this.handleReset.bind(this);
  this.state = {
    count: 0 
  };
 };

 componentDidMount() {
  try {
    const json = localStorage.getItem('count');
    const count = JSON.parse(json)

    if(count) {
      this.setState(() => ({count}))
    }
  } catch(e) {
  }
 }

 componentDidUpdate(prevProps, prevState) {
  if(prevState.count !== this.state.count) {
    const json = JSON.stringify(this.state.count);
    localStorage.setItem('count', json)
  }
 }

 componentwillUnmount() {
  console.log('componentWillUnmount')
 }

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

ReactDOM.render(<Counter />, document.getElementById('app'));


