import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-dark mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 text-center mt-5">
            <img
              src="./images/footer.jpg"
              alt=""
              style={{ width: "200px", height: "200px" }}
            />
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 text-center mt-5">
            <i
              class="fa fa-facebook-f me-5 "
              style={{ fontSize: "24px", color: "red" }}
            ></i>

            <i
              class="fa fa-twitter me-5"
              style={{ fontSize: "24px", color: "red" }}
            ></i>

            <i
              class="fa fa-instagram me-5"
              style={{ fontSize: "24px", color: "red" }}
            ></i>

            <i
              class="fa fa-youtube-play me-5"
              style={{ fontSize: "24px", color: "red" }}
            ></i>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-white text-center mt-5">
            <h1> Trending Movies</h1>
            <p>Jawan</p>
            <p> Pathan</p>
            <p> Race 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
