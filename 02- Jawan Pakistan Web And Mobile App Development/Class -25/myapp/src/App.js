import logo from "./logo.svg";
import "./App.css";

function App() {
  let fname = "Muhammad";
  let lname = "Ahsan";

  let arr = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1>{`${fname} ${lname}`}</h1>

      <h1> {arr}</h1>
    </div>

    /* <h1> Hello World</h1> */
  );
}

export default App;
