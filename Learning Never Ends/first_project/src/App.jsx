import React from "react";
import { App1, Propss } from "./components/statements/Prptypes";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h2 className="App">Main App Component</h2>
      </div>

      <App1 />

      <div>
        <Propss
          fname="Ahsann"
          age={23}
          class=" React Bootcamp"
          arr={[1, 2, 3]}
        />
      </div>
    </>
  );
}

export default App;
