import React from "react";
import "./App1.css";

let a = 10;
let result = "";

if (a > 50) {
    
  result = "True";
} else {
  result = "False";
}

const App1 = () => {
  return (
    <>
      <div>
        <h4 className="App1"> App1 Sub Component</h4>
        <br />

        {result}
      
      </div>
    </>
  );
};

export default App1;
