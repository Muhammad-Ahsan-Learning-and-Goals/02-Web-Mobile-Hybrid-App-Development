import React from 'react';
import { useState } from "react";

const Counter = () => {
let [num, setNum] = useState(10);

  let increment = () => {
    setNum(num + 2);
  };

  let decrement = () => {
    setNum(num - 2);
  };

  return (
    <>
      <div>
        <p>{num}</p>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
      </div>
    </>
  );

}

export default Counter;