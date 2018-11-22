"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 클래스 컴포넌트 사용
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
var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);

        // 빈칸을 입력했을 경우
        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (e) {
        // When JSON data is invalid, do nothing at all
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // 과거의 옵션 배열과 지금의 옵션 배열이 다를때
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("componentWillUnmount");
    }
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      // this.setState(() => {
      //   return {
      //     options: []
      //   };
      // });
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      var _this2 = this;

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
      this.setState(function (prevState) {
        return {
          options: _this2.state.options.concat(option)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var subtitle = "Put your life in the hands of a computer.";

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: function handlePick() {
            return _this3.handlePick();
          }
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: function handleDeleteOptions() {
            return _this3.handleDeleteOptions();
          },
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: "Indecision App"
};

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handlePick, disabled: !props.hasOptions },
      "What should I do?"
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "Remove All"
    ),
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        optionText: option,
        handleDeleteOption: props.handleDeleteOption
      });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    props.optionText,
    React.createElement(
      "button",
      { onClick: function onClick() {
          return props.handleDeleteOption(props.optionText);
        } },
      "remove"
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this4 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this4.handleAddOption = _this4.handleAddOption.bind(_this4);
    _this4.state = {
      // default state
      error: undefined
    };
    return _this4;
  }
  // this handleAddOption is the function created in AddOption


  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();

      // this handleAddOption is the function passed down from IndecisionApp component
      // in order to function get bound with IndecisionApp, use this.handleAddOption.bind(this) in contstructor
      // handleAddOption gets option parameter from AddOption component, it passes up to parent component
      var error = this.props.handleAddOption(option);

      // this.setState(() => {
      //   return {
      //     error: errorco
      //   }
      // })
      this.setState(function () {
        return { error: error };
      });

      if (!error) {
        e.target.elments.option.value = '';
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
