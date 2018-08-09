class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
  
      if (options) { 
        this.setState(() => ({options}))
      }
    } catch(e) {
      // if JSON data is invalid, we are not gonna do anything
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json =JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
    }
  }
  componentwillUnmount() {
    console.log('componentWillUnmount');
  }
  handleDeleteOptions() { 
    this.setState(() => ({options: []})); 
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

  handleDeleteOption(optionToRemove) { //1
    this.setState((prev) => ({
      options: prev.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    } 
  
    this.setState((prev) => ({options: prev.options.concat([option])}));
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';
    
    return (
      <div>
      <Header subtitle={subtitle} />
      <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
      <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} //2
      handleDeleteOption={this.handleDeleteOption}/>
      <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

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
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    {
      props.options.map((option) => 
      (<Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption}/> //3
      ))
    }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
    {props.optionText}
    <button
    onClick={() => {props.handleDeleteOption(props.optionText)}}>
    remove
    </button>
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
       
    this.setState(() => ({error}));

    if(!error) {
      e.target.elements.option.value = '';
    }
    
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

ReactDOM.render(<IndecisionApp options={[]}/>, document.getElementById('app'));




