import React from 'react'
import "./App.css"
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">contact</Link>
    </nav>
  );
}

export default Header


