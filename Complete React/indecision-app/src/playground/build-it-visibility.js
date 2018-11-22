// 처음에 사용했던 방법
// const appRoot = document.getElementById("app");

// let visibility = false;

// var app = {
//   title: "Visibility Toggle",
//   button1: "Show detail",
//   button2: "Hide detail",
//   comment: "This is React"
// };

// function buttonClick() {
//   visibility = !visibility
//   render()
// }

// const render = () => {
//   var template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={buttonClick}>{visibility ? app.button2 : app.button1} </button>
//       <p>{visibility && app.comment}</p>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// render();

// 컴포넌트 사용
class VisibilityToggle extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: "Visibility Toggle",
      button1: 'Show Detail',
      button2: 'Hide Detail',
      visibility: false,
      comment: 'Put your hands on a computer'
    }
  }
  
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render() {
    return (
      <div>
      <h1>{this.state.title}</h1>
      <button onClick={() => this.handleToggleVisibility()}>{this.state.visibility ? this.state.button2 : this.state.button1}</button>
      <p>{this.state.visibility && this.state.comment}</p>
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))