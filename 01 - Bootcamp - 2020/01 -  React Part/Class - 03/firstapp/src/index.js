// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// importing the react and react-dom package
import React from "react";
import ReactDOM from "react-dom";

// make a component

let names = (
  <name>
    <h3> Muhammad Ahsan</h3>
    <h3> Ali Raza</h3>
    <h4> Raza</h4>
  </name>
);

// JSX element, header
const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>
);

// JSX element, main

const main = (
  <main>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
);

// JSX element, footer
const footer = (
  <footer>
    <p>Copyright 2020</p>
  </footer>
);

// JSX element, app, a container or a parent
const app = (
  <div>
    {header}
    {main}
    {footer}
    {names}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method takes two argument
ReactDOM.render(app, rootElement);
// or
//  ReactDOM.render([header, main, footer], rootElement)
