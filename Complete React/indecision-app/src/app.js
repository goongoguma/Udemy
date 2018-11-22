// // 클래스 컴포넌트 사용
// class IndecisionApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleAddOption = this.handleAddOption.bind(this)
//     this.state = {
//       options: []
//     };
//   }

//   handleDeleteOptions() {
//     this.setState(() => {
//       return {
//         options: []
//       };
//     });
//   }

//   handlePick() {
//     const randomNum = Math.floor(Math.random() * this.state.options.length);
//     const option = this.state.options[randomNum];
//     alert(option);
//   }

//   handleAddOption(option) {
//     // in case of empty string
//     if(!option) {
//       return 'Enter valid value to add item';
//       // in case of elements already in the array
//     } else if (this.state.options.indexOf(option) > -1) {
//       return 'This option already exists';
//     }

//     this.setState((prevState) => {
//       return {
//         options: this.state.options.concat(option)
//       }
//     });
//   }

//   render() {
//     const title = "Indecision";
//     const subtitle = "Put your life in the hands of a computer.";

//     return (
//       <div>
//         <Header title={title} subtitle={subtitle} />
//         <Action hasOptions={this.state.options.length > 0} handlePick={() => this.handlePick()} />
//         <Options
//           options={this.state.options} handleDeleteOptions={() => this.handleDeleteOptions()} />
//         <AddOption handleAddOption={this.handleAddOption} />
//       </div>
//     );
//   }
// }

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {this.props.options.map(option => (
//           <Option key={option} optionText={option} />
//         ))}
//       </div>
//     );
//   }
// }

// class Option extends React.Component {
//   render() {
//     return <div>{this.props.optionText}</div>;
//   }
// }

// class AddOption extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleAddOption = this.handleAddOption.bind(this)
//     this.state = {
//       // default state
//       error: undefined
//     }
//   }
//   // this handleAddOption is the function created in AddOption
//   handleAddOption(e) {
//     e.preventDefault();

//     const option = e.target.elements.option.value.trim();

//     // this handleAddOption is the function passed down from IndecisionApp component
//     // in order to function get bound with IndecisionApp, use this.handleAddOption.bind(this) in contstructor
//     // handleAddOption gets option parameter from AddOption component, it passes up to parent component
//     const error = this.props.handleAddOption(option);

//     this.setState(() => {
//       return {
//         error: error
//       }
//     })
//   }

//   render() {
//     return (
//       <div>
//         {this.state.error && <p>{this.state.error}</p>}
//         <form onSubmit={this.handleAddOption}>
//           <input type="text" name="option" />
//           <button>Add Option</button>
//         </form>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// stateless functional component 사용
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
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

      // 빈칸을 입력했을 경우
      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
      // When JSON data is invalid, do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // 과거의 옵션 배열과 지금의 옵션 배열이 다를때
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDeleteOptions() {
    // this.setState(() => {
    //   return {
    //     options: []
    //   };
    // });
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    // in case of empty string
    if (!option) {
      return "Enter valid value to add item";
      // in case of elements already in the array
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    // this.setState((prevState) => {
    //   return {
    //     options: this.state.options.concat(option)
    //   }
    // });
    this.setState(prevState => ({
      options: this.state.options.concat(option)
    }));
  }

  render() {
    const subtitle = "Put your life in the hands of a computer.";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={() => this.handlePick()}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={() => this.handleDeleteOptions()}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision App"
};

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

const Option = props => {
  return (
    <div>
      {props.optionText}
      <button onClick={() => props.handleDeleteOption(props.optionText)}>
        remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      // default state
      error: undefined
    };
  }
  // this handleAddOption is the function created in AddOption
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    // this handleAddOption is the function passed down from IndecisionApp component
    // in order to function get bound with IndecisionApp, use this.handleAddOption.bind(this) in contstructor
    // handleAddOption gets option parameter from AddOption component, it passes up to parent component
    const error = this.props.handleAddOption(option);

    // this.setState(() => {
    //   return {
    //     error: errorco
    //   }
    // })
    this.setState(() => ({ error: error }));

    if (!error) {
      e.target.elments.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
