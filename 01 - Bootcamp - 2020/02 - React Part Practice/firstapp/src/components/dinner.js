import React from "react";
function Dinner(props) {
  return (
      <>
      <h1>I Eat {props.sweetDish} and {props.dishName} in brackFast </h1>
      <h1>  I Eat {props.sweetDish} and {props.dishName} in  Lunch</h1>
      <h1>  I Eat {props.sweetDish} and {props.dishName} in Dinner</h1>
    </>
  );
}

export default Dinner;
