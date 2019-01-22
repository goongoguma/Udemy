import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = async term => {
    const res = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: res.data.items
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{" "}
        {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;
