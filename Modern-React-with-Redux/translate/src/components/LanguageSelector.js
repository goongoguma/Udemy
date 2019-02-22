import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  // using static contextType, LanguageSelector can reach out to LanguageContext component
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("English")}
        />
        <i
          className="flag kr"
          onClick={() => this.context.onLanguageChange("한국어")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
