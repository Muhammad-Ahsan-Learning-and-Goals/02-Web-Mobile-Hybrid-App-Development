import React from "react";
import "./App.css";
import img1 from './img1.jpg';

const App = () => {
  return (
    <>
      <div>
        <h2 className="head_left">Resume APP</h2>
        
        <img className="head_right" src={img1} alt="ahsan profile pic" width="200px"  />
      </div>
    </>
  );
};

export default App;
