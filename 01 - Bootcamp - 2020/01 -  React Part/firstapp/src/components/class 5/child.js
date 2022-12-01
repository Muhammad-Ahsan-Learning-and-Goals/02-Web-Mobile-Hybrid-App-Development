import React, { useContext } from "react";
import counterContext from "./CounterContext";

const Child = (props) => {
  let conunterValue = useContext(counterContext);
  console.log(conunterValue);
  return (
    <div>
      <h3> This is First child</h3>
      <h3> Counter value is {conunterValue}</h3>
    </div>
  ); 
};

export default Child;
