import React from "react";

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.props.onLanguageChange("English")}
        />
        <i
          className="flag kr"
          onClick={() => this.props.onLanguageChange("한국어")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
