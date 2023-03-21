import React from "react";
import "./App.css";
import { Header, Headr } from "./components/Header";
import PropConcept from "./components/PropConcept";
import { Footer, MovieApp } from "./components/MovieApp";
import movies from "./components/MovieApp.json";

function App() {
  return (

    <div>
      <Header />

      <Headr />

      
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
