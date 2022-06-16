import React from "react";
import "./App.css";
import { Header, Logo } from "./components/Header";
import Footer from "./components/Footer";
import TextField from "./components/TextField";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className="main">
          <br />
          <br />
          <button type="button" class="btn btn-success">
            Success
          </button>

          <Logo />
          <br />
          <TextField />

          <br />

          <h1>Main Component</h1>
        </div>
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
