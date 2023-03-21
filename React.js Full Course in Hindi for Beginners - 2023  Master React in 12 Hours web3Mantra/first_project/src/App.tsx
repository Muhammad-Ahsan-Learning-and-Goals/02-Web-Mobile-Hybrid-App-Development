import React from "react";
import "./App.css";
import { Header, Footer } from "./components/Header";
import PropConcept from "./components/PropConcept";
import MovieApp from "./components/MovieApp";
import Movies from  './components/MovieApp.json'; 

function App() {
  return (
    <>
      <Header />
      <div className="movApp">
        <h2>Movie App</h2>
      </div>

      <div>
        {/* <Footer /> */}

        <div className="main">
          <MovieApp />
          <MovieApp />
          <MovieApp />
          <MovieApp />
          <MovieApp />
        </div>
      </div>
    </>
  );
}

export default App;
