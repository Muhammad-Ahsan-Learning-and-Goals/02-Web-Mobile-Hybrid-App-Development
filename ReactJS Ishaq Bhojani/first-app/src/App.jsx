import React from "react";
import First from "./components/first";

const App = (props) => {
  return (
    <>
      <div>
        <h1>App</h1>

        {props.title}
      </div>
    </>
  );
};

export default App;
