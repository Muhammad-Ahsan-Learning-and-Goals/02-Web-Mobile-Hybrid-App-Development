import React from "react";
import "./Home.css";
import { topCategories } from "../../data";
const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row home-topbar">
          <div className="col-lg-6 col-md-6 col-sm-12 left-col">
            <h1 className="white_color mt-3">
              {" "}
              Not Just Another Digital Agency
            </h1>
            <p className="white_color mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              commodi consectetur ex, quisquam debitis sed laborum ratione
              excepturi nulla nihil itaque? Error facere iusto praesentium in
              laudantium. A, ratione quibusdam!
            </p>
            <div className="home-btn">
              <button className="btn btn-navbar me-4">Explore</button>
              <button className="btn btn-navbar "> Get a Quote</button>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 right-col">
            <h1 className="white_color"> Top Categories</h1>
            <hr />
            {topCategories.map((Category) => (
              <>
                <img src={Category.img} alt="" />
                <p>{Category.name}</p>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
