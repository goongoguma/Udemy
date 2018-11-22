class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.state = {
      todoArr: []
    };
  }

  formSubmit(list) {
    // 빈칸
    if (!list) {
      alert("Please Enter valid text");
      // 중복
    } else if (this.state.todoArr.indexOf(list) > -1) {
      alert("This is already in the list");
    } else if (this.state.todoArr.indexOf(list) === -1) {
      this.setState(prevState => {
        return {
          todoArr: this.state.todoArr.concat(list)
        };
      });
    }
  }

  deleteAll() {
    this.setState(() => {
      return {
        todoArr: []
      };
    });
  }

  deleteOne(listtoRemove) {
    this.setState(prevState => ({
      todoArr: prevState.todoArr.filter(list => {
        return listtoRemove !== list
      })
    }))
  }

  render() {
    return (
      <div>
        <HandleTitle />
        <HandleLists todoArr={this.state.todoArr} deleteAll={this.deleteAll} deleteOne={this.deleteOne} />
        <HandleAddList formSubmit={this.formSubmit} />
      </div>
    );
  }
}

const HandleTitle = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </div>
  );
};

HandleTitle.defaultProps = {
  title: "Todo-List",
  subTitle: "Put your life in the hands of a computer."
};

class HandleLists extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.deleteAll}>전체삭제</button>
        {this.props.todoArr.map(arr => (
          <HandleList key={arr} listText={arr} deleteOne={this.props.deleteOne}/>
        ))}
      </div>
    );
  }
}

class HandleList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.listText}
        <button onClick={() => this.props.deleteOne(this.props.listText)}>
          삭제
        </button>
      </div>
    );
  }
}

class HandleAddList extends React.Component {
  constructor(props) {
    super(props);
    this.formSubmitChild = this.formSubmitChild.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      todo: ''
    };
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value
    })
    console.log(this.state.value)
  }

  formSubmitChild(e) {
    e.preventDefault();

    const inputVal = e.target.elements.todoinput.value.trim();

    this.setState(() => {
      return {
        todo: this.props.formSubmit(inputVal),
      };
    });
    this.setState({
      todo: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitChild} >
          <input type="text" name="todoinput" autoFocus={true} onChange={this.handleChange} value={this.state.todo}/>
          <button>추가</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<TodoList />, document.getElementById("app"));


//-onClick requires a reference to a function, 
      //-so you need to pass it a function. . .
      //-1. onClick={props.handleDeleteOption}  will not work because the handler needs the value of option
      //-2. onClick={props.handleDeleteOption(props.optionText)} will not work because you are invoking the function not assigning it
      //-3.The arrow function was created to solve the above two problems (a regulalr function would also have worked)