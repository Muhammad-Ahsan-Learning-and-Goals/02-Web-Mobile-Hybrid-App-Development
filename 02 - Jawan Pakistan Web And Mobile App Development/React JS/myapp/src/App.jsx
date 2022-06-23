import React from "react";
import "./App.css";
import { Header, Logo } from "./components/Header";
import Footer from "./components/Footer";
import TextField from "./components/TextField";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Muhammad Ahsan",
      email: "Muhammadahsan7099@gmail.com",
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Logo />

        <h2>(this.state.name) </h2>

        <div className="main">
          <br />
          <br />
          <button type="button" class="btn btn-success">
            Success
          </button>

          <br />
          <TextField />

          <br />

          <h1>Main Component</h1>
          <br />

          <input type="text" placeholder="Enter Your Name" id="val" />
        </div>
        <br />
        <br />
        {/* <img src="is.jpg" alt="car iamge" /> */}
        <Footer />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <h1> Function App Component </h1>
//     </div>
//   );
// }

export default App;
