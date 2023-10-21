import React from "react";
import "./Projects.css";
import { projects, topDevelopers } from "../../data";

const Projects = () => {
  return (
    <>
      <div className="container">
        <div className="project-top-div"></div>

        {/* Top Div */}

        <div className="top-developers text-center">
          <h1 className="white_color">Pojects</h1>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md3 col-sm-12 text-center">
            <img
              src="./images/location.jpg"
              alt=""
              className="project-top-img mt-4"
            />
            <h3 className="white_color mt-3">lab</h3>
            <p className="white_color">@Qlab</p>
            <p className="white_color">Followers 1M+</p>

            <div className="projects-btn d-flex flex-column">
              <button className="btn-navbar btn mt-2 mb-2">
                Ongoing Activity
              </button>
              <button className="btn-navbar btn  mt-2 mb-2">Testinomial</button>
              <button className="btn-navbar btn  mt-2 mb-2">
                Previous Projects
              </button>
              <button className="btn-navbar btn  mt-2 mb-2">Case Study</button>
            </div>
          </div>

          <div className="col-lg-9 col-md-9 col-sm-6 col-6 text-center mt-4">
            <div className="row">
              {projects.map((project) => (
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                  <img
                    src={project.img}
                    className="projects-img"
                    alt=""
                    srcset=""
                  />
                  <p className="white_color mb-3 mt-3">{project.name}</p>

                  <button
                    className="btn-navbar btn mb-3 mt-3 "
                    style={{ width: "120px" }}
                  >
                    {project.button}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Section */}

      <div className="container mt-5">
        <div className="project-top-div"></div>

        <div className="top-developers text-center">
          <h1 className="white_color">Testiminial</h1>
        </div>
        {/* Top Div */}

        <div className="row">
          <div className="col-lg-3 col-md3 col-sm-12 text-center">
            <img
              src="./images/location.jpg"
              alt=""
              className="project-top-img mt-4"
            />
            <h3 className="white_color mt-3">lab</h3>
            <p className="white_color">@Qlab</p>
            <p className="white_color">Followers 1M+</p>

            <div className="projects-btn d-flex flex-column">
              <button className="btn-navbar btn mt-2 mb-2">
                Ongoing Activity
              </button>
              <button className="btn-navbar btn  mt-2 mb-2">Testinomial</button>
              <button className="btn-navbar btn  mt-2 mb-2">
                Previous Projects
              </button>
              <button className="btn-navbar btn  mt-2 mb-2">Case Study</button>
            </div>
          </div>

          <div className="col-lg-9 col-md-9 col-sm-6 col-6 text-center mt-4">
            <div className="row">
              {topDevelopers.map((project) => (
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                  <img
                    src={project.img}
                    className="projects-img"
                    alt=""
                    srcset=""
                  />
                  <p className="white_color mb-3 mt-3">{project.name}</p>

                  <button
                    className="btn-navbar btn mb-3 mt-3 "
                    style={{ width: "120px" }}
                  >
                    Linkedin
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3rd Section */}

      <div className="container mt-5">
        <div className="project-top-div"></div>

        <div className="top-developers text-center ">
          <h1 className="white_color">Our Previous Projects</h1>
        </div>

        {/* Top Div */}

        <div className="row">
          <div className="col-lg-3 col-md3 col-sm-12 text-center">
            <img
              src="./images/location.jpg"
              alt=""
              className="project-top-img mt-4"
            />
            <h3 className="white_color mt-3">lab</h3>
            <p className="white_color">@Qlab</p>
            <p className="white_color">Followers 1M+</p>

            <div className="projects-btn d-flex flex-column">
              <button className="btn-navbar btn mt-2 mb-2">
                Ongoing Activity
              </button>
              <button className="btn-navbar btn  mt-2 mb-2">Testinomial</button>
              <button className="btn-navbar btn  mt-2 mb-2">
                Previous Projects
              </button>
              <button className="btn-navbar btn  mt-2 mb-2">Case Study</button>
            </div>
          </div>

          <div className="col-lg-9 col-md-9 col-sm-6 col-6 text-center mt-4">
            <div className="row">
              {projects.map((project) => (
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                  <img
                    src={project.img}
                    className="projects-img"
                    alt=""
                    srcset=""
                  />
                  <p className="white_color mb-3 mt-3">{project.name}</p>

                  <button
                    className="btn-navbar btn mb-3 mt-3 "
                    style={{ width: "120px" }}
                  >
                    {project.button}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
