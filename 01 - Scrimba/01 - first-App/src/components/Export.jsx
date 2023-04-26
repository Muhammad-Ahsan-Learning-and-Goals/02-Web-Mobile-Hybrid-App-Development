import React from "react";


export const Export = (props) => {
  return (
    <div>
      <h3> This is Export Component</h3>
      <p>
        My name is {props.name} i'm {props.age} years Old, Studying in
        {props.class}
      </p>
    </div>
  );
};
