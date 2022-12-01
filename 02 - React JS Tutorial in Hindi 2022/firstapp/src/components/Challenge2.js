import React from "react";
let date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

const heading = {
  color: "red",
  textTransform: "capitalize",
  textAlign: "center",
};

function Challenge() {
  return (
    <>
      <h3 contentEditable="true" className="heading">
        2nd Challaenge
      </h3>

      <h3 style={heading}>inline styling</h3>

      <br />

      <h4>Current Date is : {date}</h4>
      <h4>Current Time is : {time}</h4>
      <img src="https://picsum.photos/200/300" alt="random img" />
    </>
  );
}

export default Challenge;
