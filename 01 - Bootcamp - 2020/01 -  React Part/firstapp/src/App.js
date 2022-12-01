import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import Dinner from "./components/dinner.js";
import App1 from "./components/class3part2";
import Message from "./components/messagePass";
import Parent from "./components/class 5/Parent";
import counterContext from "./components/class 5/CounterContext";

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

    // 💚 counter and morning night theeme

    // <div className={`box ${isMorning ? `dayLight` : " "}`}>
    //   <h2>Have A Good {isMorning ? "Morning" : "Night"}</h2>

    //   <Message counter={count} />
    //   <br />
    //   <button onClick={() => setCount(count + 1)}>Update Counter</button>

    //   <button onClick={() => setMorning(!isMorning)}>
    //     Have a Good Morning
    //   </button>
    // </div>

    //💚 Class 05

    <counterContext.Provider value={10}>
      <div>
        <Parent/>
      </div>
    </counterContext.Provider>
  );
}

export default App;
