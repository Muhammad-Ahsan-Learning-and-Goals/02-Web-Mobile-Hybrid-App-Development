import React from "react";

import JSX from "./components/import and jsx/Import"
import Header from "./components/header/Header";
import Forms from "./components/Forms and UseState/Forms";
import Router from "./components/router/Router";
import { BrowserRouter } from "react-router-dom";
import {About} from "./components/header/About";
import { Contact } from "./components/header/Contact";



function App() {
  return (
    <div>
      {/* <JSX /> */}

      {/* <Forms /> */}
      <br />

      <BrowserRouter>
        <Header />
        {/* <Routes /> */}
        {/* <Router /> */}
        <About />
        <Contact /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
