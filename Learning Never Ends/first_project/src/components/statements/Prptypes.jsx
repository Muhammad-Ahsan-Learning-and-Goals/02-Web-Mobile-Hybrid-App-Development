import React from "react";
import "./Prptypes.css";
import PropTypes from "prop-types";

let a = 10;
let result = "";

if (a < 50) {
  result = "True";
} else {
  result = "False";
}

const App1 = () => {
  return (
    <>
      <div>
        <h4 className="App1"> App1 Sub Component</h4>

        {result}
        {/* 🌟🌟 Ternrary oprator */}

        <h2> {a > 5 ? "Agree" : "Disagree"}</h2>
      </div>
    </>
  );
};

function Propss(props) {
  return (
    <div>
      <h3>
        My Name is {props.fname} . I Am {props.age} Years old. I am Learning
        {props.class}
      </h3>
    </div>
  );
}

App1.propTypes = {
  fname: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  class: PropTypes.string.isRequired,
};

App1.defaultProps = {
  fname: 'Unknown',
  age: 232,
};

export { App1, Propss };
