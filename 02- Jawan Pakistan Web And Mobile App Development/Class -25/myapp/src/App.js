import React, { Component } from "react";
import "./App.css";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicTextFields from "./componets/TextField";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 style={{ color: "red" }}>Main Components</h1>
        <img
          src="https://static.remove.bg/remove-bg-web/669d7b10b2296142983fac5a5243789bd1838d00/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
          alt=""
        />

        <Footer />

        <BasicTextFields />

        <button type="button" className="btn btn-primary ">
          Primary
        </button>

        <h1> </h1>
      </div>
    );
  }
}
import BasicTextFields from "./componets/TextField";

// class Header extends Component {
//   render() {
//     return (
//       <div className="Header">
//         <h1>Header</h1>
//       </div>
//     );
//   }
// }

// class Footer extends Component {
//   render() {
//     return (
//       <div className="Footer">
//         <h1>Footer</h1>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     let fname = "Muhammad";
//     let lname = "Ahsan";
//     return (
//       <div>
//         <header />
//         <h1>{`${fname} ${lname}`}</h1>

//         <h1> </h1>
//       </div>
//     );
//   }
// }
export default App;
