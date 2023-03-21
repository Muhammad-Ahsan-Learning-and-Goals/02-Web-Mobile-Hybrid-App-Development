import React from "react";
import "./App.css";
import { Header, Footer } from "./components/Header";
import PropConcept from "./components/PropConcept";
import MovieApp from "./components/MovieApp";
import movies from "./components/MovieApp.json";

function App() {
  return (
    
      <div className="movApp">
        <h2>Movie App</h2>

        <div />
            <Header/>
        {/* <Footer /> */}

        <div className="main">
          {
          movies.map((element) => {
            return(
            <MovieApp
              title={element.title}
              year={element.Year}
              img={element.Poster}
            />
          )})
          }
        </div>
      </div>
  );
}

export default App;
