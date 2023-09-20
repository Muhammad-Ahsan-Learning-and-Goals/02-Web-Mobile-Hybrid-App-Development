import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<projects />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
