import React from "react";
import "./Home.css";
import {
  competitiveAdvantages,
  projects,
  technologies,
  topCategories,
  topDevelopers,
} from "../../data";
const Home = () => {
  return (
    <>
      {/*  First Section Start */}

      <div className="container-fluid">
        <div className="row home-topbar">
          <div className="col-lg-6 col-md-6 col-sm-12 left-col mb-5 mt-5">
            <h1 className="white_color mt-3">
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
            <h1 className="white_color text-center"> Top Categories</h1>
            {/*  Mapping the Data Items */}
            <hr className="white_color" />
            <div className="row">
              {topCategories.map((Category) => (
                <>
                  <div className="col-6 col-lg-4 col-md-4 col-sm- text-center">
                    <img src={Category.img} className="category-img" alt="" />

                    <p className="white_color category_name">{Category.name}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
          
        </div>

        {/*  First Section End */}

        {/*  Top Developer Section start */}
        <div className="top-developers text-center mt-5">
          <h1 className="white_color">Top Developers In Our Team</h1>
          <hr className="white_color mt-4" />

          {/* 😊 Import images */}

          <div className="developers-team">
            <div className="row">
              {topDevelopers.map((developer) => (
                <>
                  <div className="col-ld-2 col-md-2 col sm-6 col-6 text-center">
                    <img
                      src={developer.img}
                      className=".developer-img"
                      alt=""
                    />
                    <h3 className="white_color mt-4">{developer.name}</h3>
                    <button className="btn-navbar btn mb-3 mt-3">
                      Linkedin
                    </button>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        {/*  Top Developer Section Ended */}

        {/*  Projects Section Started */}

        <div className="projects mt-5">
          <h2 className="text-center white_color mt-5">
            Projects we Mustly Works On
          </h2>
          <hr className="white_color" mt-3 />
          <div className="top-projects">
            <div className="row">
              {projects.map((projects) => (
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                  <img
                    src={projects.img}
                    className="projects-img"
                    alt=""
                    srcset=""
                  />
                  <h3 className="white_color mb-3 mt-3">{projects.name}</h3>
                  <button className="btn-navbar btn mb-3 mt-3">
                    {projects.button}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*  Projects Section Ended */}

        {/*  Technolgy Section Start */}

        <div className="technologies mt-5 ">
          <h1 className="white_color text-center  mt-4">
            Technology We Work in
          </h1>
          <hr className="white_color mt-5" />

          <div className="row">
            {technologies.map((technology) => (
              <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <img src={technology.img} alt="" className="tech-img" />
              </div>
            ))}
          </div>
        </div>
        {/*  Technolgy Section End */}

        {/*  competitive Advantages Section Start */}

        <div className="competitive-advantages mt-5">
          <h1 className="white_color text-center"> Competitive Advantages</h1>
          <hr className="white_color mt-5" />
          <div className="row">
            {competitiveAdvantages.map((comp) => (
              <div className="col-lg-3 col-md-3 col-sm-12 text-center white_color">
                <img src={comp.img} alt="" className="comp-img" />
                <h2 className="white_color">{comp.heading}</h2>
                <p className="white_color">{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/*  competitive Advantages Section End */}

        <div className="row mt-4 mb-4">
          <div className="col-lg-6 col-md-6 col-sm-12 pt-4 pb-4">
            <img
              src="/images/metaverse2.jpg"
              alt=""
              style={{ width: "400px", height: "300px" }}
            />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 text-center pt-5 pb-4">
            <h1 className="white_color">
              Create , Sell , Well and Collect your Best NFTs With Us very Fast
            </h1>
            <p className="white_color">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus illo esse ipsa officia eum a libero aliquid excepturi
              est cumque?
            </p>
            <button className="btn-navbar btn">Connect Wallet</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
