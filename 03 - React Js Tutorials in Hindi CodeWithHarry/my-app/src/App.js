import logo from "./logo.svg";
import "./App.css";

let Name = "Muhammad";

function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About us</li>
        <li>Servuce</li>
        <li>Contect Us</li>
      </nav>

      <div className="container">
        <h1> Hello {Name}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
          totam ducimus tenetur numquam officiis eaque repellendus labore vitae
          cupiditate odio vero praesentium accusantium dolorem quos adipisci
          possimus quis quidem deleniti?
        </p>
      </div>
    </>
  );
}

export default App;
