import React from "react";
import Logoimg from "../images/is.jpg";

// exports default class Header extends React.Component

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1> Header Component </h1>
      </div>
    );
  }
}

// Add Another New Component

class Logo extends React.Component {
  render() {
    return (
      <div>
        <img src={Logoimg} alt=" car image"  width="50/>
        {/* <h1> Logo Component </h1> */}
      </div>
    );
  }
}
export { Header, Logo };
