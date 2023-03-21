import React from "react";
import "./App.css";
import { Header, Footer } from "./components/Header";
import PropConcept from "./components/PropConcept";
import MovieApp from "./components/MovieApp";

function App() {
  return (
    <div>
      <Header />

      {/* <Footer /> */}

      <div className="MovieApp">
        <MovieApp />
        
      </div>
    </div>
  );
}

export default App;
