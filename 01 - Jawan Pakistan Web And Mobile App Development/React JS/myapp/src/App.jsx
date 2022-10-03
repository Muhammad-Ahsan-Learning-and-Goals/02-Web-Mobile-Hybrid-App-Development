import React from "react";
import "./App.css";
import { Header, Logo } from "./components/Header";
import Footer from "./components/Footer";
import TextField from "./components/TextField";
import Todo from "."

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Muhammad Ahsan",
      email: "Muhammadahsan7099@gmail.com",
      age: "23",
      value: "",
    };
  }

  set_name = () => {
    this.setState({
      // name: "Ali",

      name: this.state.value,
    });
  };

  get_name = () => {
    console.log(this.state.get_name);
  };

 

  handleChange(e) {
    console.log(e.target.value);
    console.log(e.target.name);
  }

  render() {
    return (
      <div>
        <Header />

        <h2>My Name is {this.state.name} </h2>
        <h4>Email:{this.state.email}</h4>

        <div className="main">
          <br />
          <br />
          <button type="button" class="btn btn-success">
            Success
          </button>

          <br />
          <TextField />

          <br />

          <Logo />

          <h1>Main Component</h1>
          <br />

          <input
            // onChange={(e) => console.log(e.target.value)}

            onChange={(e) => this.setState({ value: e.target.value })}
            type="text"
            placeholder="Enter Your Name"
            id="val"
          />

          <input
            name="email"
            // onChange={(e) => console.log(e.target.value)}

            onChange={(e) => this.handleChange(e)({ value: e.target.value })}
            type="text"
            placeholder="Enter Your Name"
            id="val"
          />

          <button onClick={this.set_name}> Set Name</button>

          <button onClick={this.get_name}> Get Name</button>
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
