// stateless functional component

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }

  // handleDeleteOptions
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  // handlePick - pass down to Action and setup onClick - bind here
  // randomly pick an option and alert it
  // handlePick() {
  //   this.setState(() => {
  //     const add = Math.floor(Math.random() * this.state.options.length)
  //     return {
  //       pick: alert(this.state.options[add])
  //     }
  //   })
  // }

   handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    } 
  
    this.setState((prev) => {
    return {
      options: prev.options.concat([option])
    }
   });
   
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    
    return (
      <div>
      <Header title={title} subtitle={subtitle} />
      <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
      <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
      <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
    </div>
  );
}

const Action = (props) => {
  return (
    <div>
    <button onClick={props.handlePick} disabled={!props.hasOptions}> 
    What should I do? 
    </button>
    </div>
  );
};

// class Action extends React.Component {
//    render() {
//     return (
//       <div>
//       <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}> 
//       What should I do? 
//       </button>
//       </div>
//     );
//   }
// }

const Options = (props) => {
  return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {
      props.options.map((e) => <Option key={e} optionText={e}/>)
    }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
    {props.optionText}
    </div>
  );
}

// 1. Setup the form with text input and submit button
// 2. Wire up onSubmit
// 3. handleAddOption -> fetch the value typed -> if value, then alert
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
   
    const option = e.target.elements.option.value.trim(); // trim() removes white space
    const error = this.props.handleAddOption(option);
    e.target.elements.[options].value = '';
   
    this.setState(() => {
      return {
        error
      };
    });
    
  }
  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit = {this.handleAddOption}>
      <input type='text' name='option' />
      <button>Submit</button>
      </form>
      </div>
    );
  }
}

// stateless functional component 
// props get passed in to the function as an argument 
// this is not used in stateless function

// const User = (props) => { 
//   return (
//     <div>
//       <p>Name: {props.name} </p> 
//       <p>Age: {props.age} </p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));




