import "./App.css";

import SubComponent1 from "./components/SubComponent1";

function App() {
  return (
    <div className="cotainer1">
      <h3 className="cotainer2"> First component </h3>
      <p className="cotainer3"> This is Pargraph Tag</p>

      <SubComponent1 />
    </div>
  ); 
}

export default App;
