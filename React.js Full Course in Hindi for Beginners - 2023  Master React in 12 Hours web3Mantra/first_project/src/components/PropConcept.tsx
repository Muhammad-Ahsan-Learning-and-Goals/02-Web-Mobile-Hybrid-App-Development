import React from "react";

// const PropConcept = (props) => {

const PropConcept = ({ myName, age }) => {
  return (
    <div>
      <h1>{myName}</h1>
      <h1>{age}</h1>
    </div>
  );
};

export default PropConcept;
