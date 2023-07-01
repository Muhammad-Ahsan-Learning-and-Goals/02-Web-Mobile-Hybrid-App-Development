import React from "react";
import "./App.css";
import First from "./components/First";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="content">
          <Home />
        </div>
        {/* <First /> */}
      </div>
    </>
  );
};

export default App;
