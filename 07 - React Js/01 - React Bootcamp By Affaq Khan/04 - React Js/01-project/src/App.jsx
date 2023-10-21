import React from "react";
import { studentsInfo } from "./components/props/data";
import State from "./components/state/State";
import States from "./components/state/States";
import Forms from "./components/forms/Forms";
import { Route, Routes } from "react-router-dom";
import Home from "./components/API/Home";
import Signup from "./components/API/Signup";
import Signin from "./components/API/Signin";

// import Props from "./components/props/Props";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* <Props name="Ali" age="6" className="FSC" />
      <h3> Hello Word</h3> */}

      {/* 😊 State Component Start */}

      {/* <State />

      <States /> */}

      {/* 😊 State Component End */}

      {/* 🐱‍🏍 Forms Component Start */}

      {/* <Forms /> */}

      {/* 🐱‍🏍 Forms Component End */}

      {/* 😊 Props Component Start */}

      {studentsInfo.map((std) => (
        <>
          {/* 💕 Props  Started */}

          {/* <h2>{std.name}</h2>
            <h2>{std.age}</h2>
            <h2>{std.class}</h2> */}

          {/* 2nd Method */}

          {/* <Props std = {std}/> */}

          {/* 💕 Props  End */}

          {/* 😊 State Started */}

          {/*  */}
        </>
      ))}

      {/* 😊 Props Component End */}
    </>
  );
};

export default App;
