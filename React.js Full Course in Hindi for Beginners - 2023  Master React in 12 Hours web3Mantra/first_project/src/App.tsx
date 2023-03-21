import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import PropConcept from "./components/PropConcept";
import { Footer, MovieApp } from "./components/MovieApp";
import movies from "./components/MovieApp.json";

function App() {
  return (
    <div className="movApp">
      <Header />
      <h2>Movie App</h2>
      <div />
      <div className="main">
        {movies.map((element, index) => {
          return (
            <MovieApp
              key={index}
              year={element.Year}
              title={element.Title}
              img={element.Poster}
            />
          );
        })}
      </div>
      <Footer />;
    </div>
  );
}

export default App;
