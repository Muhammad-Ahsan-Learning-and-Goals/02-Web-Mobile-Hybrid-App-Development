import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Header</h1>
      </div>
    );
  }
}

class Logo extends React.Component {
  render() {
    return (
      <div>
        <h1> Logo </h1>
        <img src="" alt="" />
      </div>
    );
  }
}

export { Header, Logo };
