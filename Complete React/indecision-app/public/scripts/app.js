"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoList = function (_React$Component) {
  _inherits(TodoList, _React$Component);

  function TodoList(props) {
    _classCallCheck(this, TodoList);

    var _this = _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call(this, props));

    _this.formSubmit = _this.formSubmit.bind(_this);
    _this.deleteAll = _this.deleteAll.bind(_this);
    _this.deleteOne = _this.deleteOne.bind(_this);
    _this.state = {
      todoArr: []
    };
    return _this;
  }

  _createClass(TodoList, [{
    key: "formSubmit",
    value: function formSubmit(list) {
      var _this2 = this;

      // 빈칸
      if (!list) {
        alert("Please Enter valid text");
        // 중복
      } else if (this.state.todoArr.indexOf(list) > -1) {
        alert("This is already in the list");
      } else if (this.state.todoArr.indexOf(list) === -1) {
        this.setState(function (prevState) {
          return {
            todoArr: _this2.state.todoArr.concat(list)
          };
        });
      }
    }
  }, {
    key: "deleteAll",
    value: function deleteAll() {
      this.setState(function () {
        return {
          todoArr: []
        };
      });
    }
  }, {
    key: "deleteOne",
    value: function deleteOne(listtoRemove) {
      this.setState(function (prevState) {
        return {
          todoArr: prevState.todoArr.filter(function (list) {
            return listtoRemove !== list;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(HandleTitle, null),
        React.createElement(HandleLists, { todoArr: this.state.todoArr, deleteAll: this.deleteAll, deleteOne: this.deleteOne }),
        React.createElement(HandleAddList, { formSubmit: this.formSubmit })
      );
    }
  }]);

  return TodoList;
}(React.Component);

var HandleTitle = function HandleTitle(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "h2",
      null,
      props.subTitle
    )
  );
};

HandleTitle.defaultProps = {
  title: "Todo-List",
  subTitle: "Put your life in the hands of a computer."
};

var HandleLists = function (_React$Component2) {
  _inherits(HandleLists, _React$Component2);

  function HandleLists(props) {
    _classCallCheck(this, HandleLists);

    return _possibleConstructorReturn(this, (HandleLists.__proto__ || Object.getPrototypeOf(HandleLists)).call(this, props));
  }

  _createClass(HandleLists, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.props.deleteAll },
          "\uC804\uCCB4\uC0AD\uC81C"
        ),
        this.props.todoArr.map(function (arr) {
          return React.createElement(HandleList, { key: arr, listText: arr, deleteOne: _this4.props.deleteOne });
        })
      );
    }
  }]);

  return HandleLists;
}(React.Component);

var HandleList = function (_React$Component3) {
  _inherits(HandleList, _React$Component3);

  function HandleList(props) {
    _classCallCheck(this, HandleList);

    return _possibleConstructorReturn(this, (HandleList.__proto__ || Object.getPrototypeOf(HandleList)).call(this, props));
  }

  _createClass(HandleList, [{
    key: "render",
    value: function render() {
      var _this6 = this;

      return React.createElement(
        "div",
        null,
        this.props.listText,
        React.createElement(
          "button",
          { onClick: function onClick() {
              return _this6.props.deleteOne(_this6.props.listText);
            } },
          "\uC0AD\uC81C"
        )
      );
    }
  }]);

  return HandleList;
}(React.Component);

var HandleAddList = function (_React$Component4) {
  _inherits(HandleAddList, _React$Component4);

  function HandleAddList(props) {
    _classCallCheck(this, HandleAddList);

    var _this7 = _possibleConstructorReturn(this, (HandleAddList.__proto__ || Object.getPrototypeOf(HandleAddList)).call(this, props));

    _this7.formSubmitChild = _this7.formSubmitChild.bind(_this7);
    _this7.handleChange = _this7.handleChange.bind(_this7);
    _this7.state = {
      todo: ''
    };
    return _this7;
  }

  _createClass(HandleAddList, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        todo: e.target.value
      });
      console.log(this.state.value);
    }
  }, {
    key: "formSubmitChild",
    value: function formSubmitChild(e) {
      var _this8 = this;

      e.preventDefault();

      var inputVal = e.target.elements.todoinput.value.trim();

      this.setState(function () {
        return {
          todo: _this8.props.formSubmit(inputVal)
        };
      });
      this.setState({
        todo: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.formSubmitChild },
          React.createElement("input", { type: "text", name: "todoinput", autoFocus: true, onChange: this.handleChange, value: this.state.todo }),
          React.createElement(
            "button",
            null,
            "\uCD94\uAC00"
          )
        )
      );
    }
  }]);

  return HandleAddList;
}(React.Component);

ReactDOM.render(React.createElement(TodoList, null), document.getElementById("app"));

//-onClick requires a reference to a function, 
//-so you need to pass it a function. . .
//-1. onClick={props.handleDeleteOption}  will not work because the handler needs the value of option
//-2. onClick={props.handleDeleteOption(props.optionText)} will not work because you are invoking the function not assigning it
//-3.The arrow function was created to solve the above two problems (a regulalr function would also have worked)
