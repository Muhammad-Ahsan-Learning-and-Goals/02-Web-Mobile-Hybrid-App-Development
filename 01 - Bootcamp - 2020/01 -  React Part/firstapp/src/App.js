import React, { useState, isMorning, Morning, Night } from "react";

import logo from "./logo.svg";
import "./App.css";
import Dinner from "./components/dinner.js";
import App1 from "./components/class3part2";
import Message from "./components/messagePass";

function App() {
  let [count, setCount] = useState(1);
  
  let [isMorning, setMorning] = useState(true);

  return (
    //  <div className="App">
    //   <Dinner dishName="Mutton" sweetDish="Halwa" />

    //   <hr />

    //   <Dinner dishName="Pallao" sweetDish="Kheer" />

    //   <hr />

    //   <Dinner dishName="gost" sweetDish="sweet" />

    <div className={`box ${isMorning ? `dayLight` : " "}`}>
      <h2>Have A Good  {isMorning ? "Morning" : "Night"}</h2>

      <Message counter={count} />
      <br />
      <button onClick={() => setCount(count + 1)}>Update Counter</button>

      <button onClick={() => setMorning(!isMorning)}>Have a Good Morning</button>
    </div>
  );
}

export default App;
