import React from "react";
import "./App.css";
// import img1 from "./component/img/img1.jpg";

const App = () => {
  return (
    <>
      <div>
        <h2 className="head">Resume APP</h2>
      </div>

      <div className="head_left">
        <div>
          <h1>Muhammad Ahsan</h1>
          <h4> Lahore , Pakistan </h4>
          <h4> +92 343 12345 </h4>
          <h4>DOB: 27 Dec 1998</h4>

          <li>
            <a href="https://www.linkedin.com/in/ahsanshareef21/"> LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/ahsanshareef21"> Github</a>
          </li>
          <li>
            {" "}
            <a href="https://github.com/ahsanshareef21">Twitter</a>
          </li>
        </div>

        {/* <img src={img1} alt="ahsan profile pic" width="200px" /> */}
      </div>

      <div>
        <h2> Education</h2>
        <div>
          <ul>
            <li>Matric</li>
            <li>FSC</li>
            <li> BSCS</li>
          </ul>
        </div>

        <div>
          <h2> SKills</h2>
          <div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li> Javascript</li>
              <li>React Js</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
