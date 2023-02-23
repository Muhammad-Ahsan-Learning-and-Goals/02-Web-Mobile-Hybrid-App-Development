import React from "react";
import "./App.css";
import { Header, Logo } from "./components/Header";
import Footer from "./components/Footer";
// import Page from "./components/Page";

// 😊 Function components

function App() {
  return (
    <div className="App">
      <Header />
      <br />

      <input type="text" placeholder="Enter First Value" id="val" />

      <br />
      <br />

      <Footer />
    </div>
  );
}

export default App;
