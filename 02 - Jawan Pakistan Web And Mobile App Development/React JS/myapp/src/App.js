import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import { Header, Logo } from "./components/Header";
import { render } from "@testing-library/react";
 
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Logo />
      </div>
    );
  }
}

export default App;
