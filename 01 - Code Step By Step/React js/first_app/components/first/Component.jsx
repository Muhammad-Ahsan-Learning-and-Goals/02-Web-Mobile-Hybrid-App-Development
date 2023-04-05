import React from "react";
import "./Component.css";
import { useState } from "react";

const Component = (props) => {
  return (
    <>
      <div className="styl">
        <h2>{[props.name]}</h2>
        <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />
      </div>
    </>
  );
};

const Component1 = () => {
  return (
    <>
      <div className="flex1">
        <Component name="Ali" />
        <Component name="Raza" />
        <Component name="Ahsan" />
      </div>
    </>
  );
};

const State = () => {
  const [data, setData] = useState(0);
  function updateData() 
  {
    setData(data+1);
  }
  return (
    <>
      <h2>{data}</h2>
      <button onClick={updateData}> Update Data</button>
    </>
  );
};

export { Component1, State };
