import React from "react";
import "./Component.css";

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

        <Component name="ali" />
        <Component name="Raza" />
        <Component name="Ahsan" />
      </div>
    </>
  );
};

export { Component1 };
