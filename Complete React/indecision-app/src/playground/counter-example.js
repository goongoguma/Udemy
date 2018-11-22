// 처음에 사용했던 방법
// let count = 0;

// const addOne = () => {
//   count++;
//   renderCounterApp();
// }
// const minusOne = () => {
//  count--;
//  renderCounterApp();
// }
// const reset = () => {
//  count = 0;
//  renderCounterApp();
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
//   ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp

// 컴포넌트 사용
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);

    if(!isNaN(count)) {
      this.setState(() => ({ count: count }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count)
    }
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  handleReset() {
    this.setState({
      count: 0
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.handleAddOne()}>+1</button>
        <button onClick={() => this.handleMinusOne()}>-1</button>
        <button onClick={() => this.handleReset()}>reset</button>
      </div>
    )
  }
}

ReactDOM.render (<Counter />, document.getElementById('app'))


// class Counter extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleIncrease = this.handleIncrease.bind(this);
//     this.handleDecrease = this.handleDecrease.bind(this);
//     this.handleReset = this.handleReset.bind(this);
//     this.state = {
//       title: "Counter App",
//       num: 0
//     }
//   }

//   handleIncrease() {
//     this.setState((prevState) => {
//       return {
//         num: prevState.num + 1
//       }
//     })
//   }

//   handleDecrease() {
//     this.setState((prevState) => {
//       return {
//         num: prevState.num - 1
//       }
//     })
//   }

//   handleReset() {
//     this.setState(() => {
//       return {
//         num: 0
//       }
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.title}</h1>
//         <h2>Count: {this.state.num}</h2>
//         <button onClick={this.handleIncrease}>+1</button>
//         <button onClick={this.handleDecrease}>-1</button>
//         <button onClick={this.handleReset}>reset</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Counter />, document.getElementById('app'))
