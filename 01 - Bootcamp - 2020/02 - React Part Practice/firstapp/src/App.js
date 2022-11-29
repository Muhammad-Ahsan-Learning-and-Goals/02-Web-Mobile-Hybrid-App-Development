import logo from "./logo.svg";
import "./App.css";
import Dinner from "./components/dinner.js";

function App() {
  return (
    <div className="App">
      <Dinner dishName="biryani" sweetDish="Kheer" />
      <hr />
      <Dinner dishName="Chicken" sweetDish="Halwa" />
      <hr />
      <Dinner dishName="Mutton" sweetDish="Mango" />
    </div>
  );
}

export default App;
