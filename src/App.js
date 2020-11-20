import React, { Component, Fragment } from "react";
import YoutubeHeader from "./Components/YoutubeHeader/Header";
import api, { baseParams } from "./Services/Api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  onTermSubmit = async term => {
    let response = await api.get("/search", {
      params: {
        q: term,
        ...baseParams,
      },
    });
    console.log(response);
  };
  render() {
    return (
      <Fragment>
        <header>
          <YoutubeHeader onTermSubmit={this.onTermSubmit} />
        </header>
      </Fragment>
    );
  }
}

export default App;
