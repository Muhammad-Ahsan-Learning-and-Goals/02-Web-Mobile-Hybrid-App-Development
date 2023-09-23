import React from "react";
// import "./data";

const Props = ({ std }) => {
  return (
    <>
      {/* <h3>
        My name is {name}, I am {age} years old, and I am in class {className}.

           
      </h3> */}
      {/*  Single component */}
      
      <h2>{std.name}</h2>
      <h2>{std.age}</h2>
      <h2>{std.class}</h2>
    </>
  );
};

export default Props;
