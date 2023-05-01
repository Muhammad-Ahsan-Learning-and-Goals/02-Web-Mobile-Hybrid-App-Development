import React, { useState, useEffect } from "react";

const App = () => {

  const [data ,setData]=useState(0);


  const Increment=()=>{
    return(
      setData(data+1)
    )
  }

  const Decrement = () => {
    return setData(data - 1);
  };

  return (
    <>
      <div>

        <input className="input" type="number" value={data} />
        <br />
        <br />

        <button onClick={Increment}>
          <h1 className="btn"> + </h1>
        </button>

        <button onClick={Decrement}>
          <h1 className="btn">-</h1>
        </button>
      </div>
    </>
  );
};

export default App;
