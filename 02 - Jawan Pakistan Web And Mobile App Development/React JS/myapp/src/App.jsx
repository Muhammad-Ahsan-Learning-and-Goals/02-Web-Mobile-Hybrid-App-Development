import React from "react";
import "./App.css";
import Header from "./components/Header";
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
          <br />
          <TextField />

          <br />

          <h1>Main Component</h1>
        </div>
        <img src="is.jpg" alt="car iamge" />
        <Footer />
      </div>
    );
  }
}

// Add Another New Component

class Logo extends React.Component {
  render() {
    return (
      <div>
        {/* <img src="" alt="" /> */}
        <h1> Logo Components </h1>
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
