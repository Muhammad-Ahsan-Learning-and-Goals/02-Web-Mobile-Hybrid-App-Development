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
        
        <br />
        <PropConcept myName="Ali Raza (props) " />
        <PropConcept age="Age : 24" />

        <br />
        <PropConcept myName="Ali (props) " />
        <PropConcept age="Age : 26" />

        <Footer />
      </div>
    </>
  );
}

export default App;
