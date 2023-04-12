import React from "react";
import "./Header.css"

const Header = () => {
  // how to include css in file
  //  inline and Internal CSS

  return (
    <>
      <div className="header"
        style={{
          backgroundColor: "red",
          padding: "2px",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          fontSize: "bold",
          marginBottom: "10px",
        }}
      >
        <h3
          style={{
            border: "2px solid white",
            padding: "10px",
          }}
        >
          Header
        </h3>
      </div>

      <div className="header1">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>


      </div>
    </>
  );
};

export default Header;
