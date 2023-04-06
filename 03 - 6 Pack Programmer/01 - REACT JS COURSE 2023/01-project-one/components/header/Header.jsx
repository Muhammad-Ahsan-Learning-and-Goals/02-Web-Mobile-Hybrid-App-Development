import React from "react";

const Header = () => {
  // how to include css in file
  //  inline and Internal CSS

  return (
    <div
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
  );
};

export default Header;
