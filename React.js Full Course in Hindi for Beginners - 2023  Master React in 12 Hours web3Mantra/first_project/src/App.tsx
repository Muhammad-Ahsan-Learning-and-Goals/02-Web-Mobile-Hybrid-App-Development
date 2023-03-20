import React from "react";
import "./App.css";
import { Header, Footer } from "./components/Header";
import PropConcept from "./components/PropConcept";

function App() {
  return (
    <>
      <div>
        <Header />

        <PropConcept myName="Muhammad Ahsan (props) " />
        <PropConcept age="Age : 23" />

        <Footer />
      </div>
    </>
  );
}

export default App;
