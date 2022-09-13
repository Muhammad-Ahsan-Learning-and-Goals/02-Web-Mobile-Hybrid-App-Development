import React from "react";

function Dinner(props){
  return (
    <div>
    
      <h3>Today We are Serving{props.dishName}</h3>

      <hr />

      <h3>Today We are Serving{props.sweet}</h3>
    </div>
  );
}

export default Dinner;
