import React from "react";

class App extends React.Component {
  state = { language: "English" };

  onLanguageChange = language => {
    this.setState({
      language
    });
  };

  render() {
    return (
      <div className="ui container">
        Select a language:
        <i
          className="flag us"
          onClick={() => this.onLanguageChange("English")}
        />
        <i
          className="flag kr"
          onClick={() => this.onLanguageChange("한국어")}
        />
        <div>{this.state.language}</div>
      </div>
    );
  }
}

export default App;
