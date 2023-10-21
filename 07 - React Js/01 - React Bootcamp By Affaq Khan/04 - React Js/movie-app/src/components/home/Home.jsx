import React from "react";
import movies from "../../data";

const Home = () => {
  return (
    <div className="container">
      <div className="text-center text-white main heading">
        <h2> Top Trending Movies</h2>
      </div>

      <div className="row">
        {movies.map((movie) => (
          <div className="col-lg-3 col-md-6 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded">
            <div className="movie-desc">
              <h2>{movie.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
