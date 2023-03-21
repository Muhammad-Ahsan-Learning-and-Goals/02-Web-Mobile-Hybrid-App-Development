import React from "react";
import propTypes from "prop-types";

// const PropConcept = (props) => {

const PropConcept = ({ myName, age }) => {
  return (
    <div>
      <h1>{myName}</h1>
      <h1>{age}</h1>
    </div>
  );
};

PropConcept.prototype = {
  myName: propTypes.string,
  age: propTypes.number,
};
// PropConcept.defaultprops = {
//   myName: "Name",
//   age: 0,
// };
export default PropConcept;