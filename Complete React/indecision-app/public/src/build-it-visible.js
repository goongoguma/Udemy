// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false 

class VisibilityToggle extends React.Component {
 constructor(props) {
  super(props);
  this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  this.state = {
    visibility: false
  };
};
handleToggleVisibility() {
  this.setState((prev) => {
    return {
      visibility: !prev.visibility
    };
  });
}
render() {
  return(
  <div>
  <h1>Toggle Visibility</h1>
  <button onClick ={this.handleToggleVisibility}>
  {this.state.visibility ? 'hello' : 'Goodbye'}
  </button>
  {this.state.visibility && 'Good Morning'}
  {this.state.visibility || 'Good Night'}
  </div>
  );
}
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false 

// class VisibilityToggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
//     this.state = {
//       visibility: false
//     }
//   }
//   handleToggleVisibility() {
//     this.setState((prev) => {
//       return {
//         visibility: !prev.visibility
//       }
//     })
//   }
//   render() {
//     return(
//       <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={this.handleToggleVisibility}>
//          {this.state.visibility ? 'Hide details' : 'Show details'}
//         </button>
//         {this.state.visibility && (
//           <div>
//           <p>Hey, These are some details you can now see!</p>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


