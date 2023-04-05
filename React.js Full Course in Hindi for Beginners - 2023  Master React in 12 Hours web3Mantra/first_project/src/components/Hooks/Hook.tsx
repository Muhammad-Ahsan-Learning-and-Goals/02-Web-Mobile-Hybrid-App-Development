import { func } from "prop-types";
import "./Hook.css";
import React, { useState } from "react";

function Hook() {

  // 🌟🌟 num is initial value

  // setNum is value to set

  const [num, setNum] = useState(80);

  //🌟 make two function and call them on button
  function inc() {
    setNum(num + 6);
  }
  function dec() {
    setNum(num - 6);
  }

  return (
    <div>
      <div className="hook1">
        <h1>Hooks in React js</h1>
      </div>

      <div className="hook2">
        <h2 className="head1"> Counter App with USEState Hook</h2>
        <h2 className="heading1">{num}</h2>
        <button className="btn" onClick={inc}>
          Increment
        </button>
        <button className="btn" onClick={dec}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Hook;
