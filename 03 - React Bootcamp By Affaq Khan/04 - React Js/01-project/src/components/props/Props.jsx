import React from "react";
import "./Props.css";

const Props = ({ name, color, price }) => {
  return (
    <>
      <div>
        <h2> {name}</h2>
        <h2>{color}</h2>
        <h2>{price}</h2>
      </div>
    </>
  );
};

export default Props;
