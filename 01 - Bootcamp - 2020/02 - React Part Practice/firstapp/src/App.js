import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dinner from "./components/dinner.js";
import Message from "./components/counter";

function App() {
  return (
    // <div className="App">
    //   <Dinner dishName="biryani" sweetDish="Kheer" />
    //   <hr />
    //   <Dinner dishName="Chicken" sweetDish="Halwa" />
    //   <hr />
    //   <Dinner dishName="Mutton" sweetDish="Mango" />
    // </div>

    <Message />
  );
}

export default App;
