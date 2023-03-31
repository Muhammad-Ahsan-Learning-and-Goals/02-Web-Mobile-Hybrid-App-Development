import React from "react";
import { Component1, State } from "../components/first/Component";
import Props from "../components/props/Props";

function App() {
  return (
    <>
      <div className="child1"> Child App Component</div>

      {/* <Component /> */}

      {/* <Component1 /> */}

      <br />

      {/* <State /> */}
      <div>
        <Props fname={"Ali"} email={"Ali@gmail.com"} marks={90} />
        <Props fname={"Raza"} email={"Raza@gmail.com"} marks={70} />
        <Props fname={"Ahsan"} email={"Ahsan@gmail.com"} marks={56} />
      </div>
    </>
  );
}

export default App;
