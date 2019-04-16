import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    apiStuff: ""
  };
  componentDidMount() {
    fetch("/api")
      .then(data => data.json())
      .then(data => this.setState({ apiStuff: data.echo }));
  }
  render() {
    return <div className="App">{this.state.apiStuff}</div>;
  }
}

export default App;
