import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { render } from "@testing-library/react";

class App extends React.Component {
  state = {
    setCount: 10,
  };

  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <h2>{this.state.setCount}</h2>
        <button>+</button>
        <button>-</button>
      </div>
    );
  }
}

export default App;
