import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className="main">
          <h1>Main Component</h1>
        </div>

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
