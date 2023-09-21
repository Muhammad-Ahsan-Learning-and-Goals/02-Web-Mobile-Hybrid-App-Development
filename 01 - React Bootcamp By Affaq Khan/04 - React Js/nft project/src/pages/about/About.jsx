import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="container">
        <h1 className="white_color text-center mt-3 mb-3"> About Us</h1>

        <div className="about-card">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-sm-12 text-center">
              <h1 className="white_color">
                On a Mission to enviormental Sustainablity with NFT's
              </h1>
              <p className="white_color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, in! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aliquam, in!
              </p>
            </div>

            <div className="col-lg-6 col-sm-6 col-sm-12 text-center">
              <img src="./images/metaverse5.jpg" alt="" />
            </div>
          </div>
        </div>

        <h1 className="white_color text-center mt-5 mb-5">
          NFT Market place with Everything for Everyone
        </h1>
        <div className="text-center">
          <video
            className="background-video"
            autoPlay
            muted
            loop
            style={{ width: "500px", height: "500px" }}
          >
            <source src="./images/about.mp4" type="video/mp4" />
            Your Browser does not support the Video Tag.
          </video>
        </div>

        <div className="about-card mt-4 mb-4 " style={{ height: "500px" }}>
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-sm-12 text-center">
              <img src="./images/metaverse5.jpg" alt=""  className="mt-5" style={{width:"350px", height:"30px"}}/>
            </div>

            <div className="col-lg-6 col-sm-6 col-sm-12 text-center">
              <h1 className="white_color mt-5">
                On a Mission to enviormental Sustainablity with NFT's
              </h1>
              <p className="white_color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, in! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aliquam, in!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
