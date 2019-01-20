import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const res = await unsplash.get("/search/photos", {
      // It specifies the different query string parameters we want to add into the request
      // It is same as ?query=cars at the end of the address
      params: { query: term }
    });
    this.setState({
      images: res.data.results
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;