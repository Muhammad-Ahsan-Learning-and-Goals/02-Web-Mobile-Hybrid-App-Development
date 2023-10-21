import React, { useState } from "react";
import "./State.css";
const State = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  //  Decrement 
   const Decrement = () => {
     setCount(count - 1);
   };

  return (
    <>
      {/* <div className="main_div">
        <h1>{count}</h1>
        <button onClick={Increment} className="increment_btn">
          {" "}
          Increment{" "}
        </button>
        <button onClick={Decrement}> Decrement </button>
      </div> */}



      
    </>
  );
};

export default State;
