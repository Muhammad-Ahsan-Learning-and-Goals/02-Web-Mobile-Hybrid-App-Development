import React from "react";
import { Component1, Component2 } from "./components/Component1";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <h3> This Is Main App Component </h3>

      <Navbar />
      <About />
      <Contact />
      <Products />
      <Footer />
    </>
  );
};

export default App;
