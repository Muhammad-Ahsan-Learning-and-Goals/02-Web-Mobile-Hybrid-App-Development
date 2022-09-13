import logo from "./logo.svg";
import "./App.css";
import Dinner from "./components/dinner.js";

function App() {
  return (
    <div className="App">
      <h2> This is main Page</h2>

      <Dinner dishName=" Sabzi" sweet=" Kheer" />
    </div>
  );
}

export default App;
