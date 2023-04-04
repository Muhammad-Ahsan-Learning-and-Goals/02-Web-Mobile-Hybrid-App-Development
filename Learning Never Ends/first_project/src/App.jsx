import React from "react";
import { App1, Propss } from "./components/statements/App1";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h2 className="App">Main App Component</h2>
      </div>

      <App1 />

      <div>
        <Propss name="Ahsan" age="23" class=" React Bootcamp" />
        <Propss name="Ali" age="13" class=" Angular Bootcamp" />
        <Propss name="Raza" age="34" class=" Andriod Bootcamp" />
      </div>
    </>
  );
}

export default App;
