import logo from "./logo.svg";
import "./App.css";
import Dinner from "./components/dinner.js";

function App() {
  return (
    <div className="App">
      
      <Dinner dishName="Mutton" sweetDish="Halwa" />

      <hr />

      <Dinner dishName="Pallao" sweetDish="Kheer" />

      <hr />

      <Dinner dishName="gost" sweetDish="sweet" />
    </div>
  );
}

export default App;
