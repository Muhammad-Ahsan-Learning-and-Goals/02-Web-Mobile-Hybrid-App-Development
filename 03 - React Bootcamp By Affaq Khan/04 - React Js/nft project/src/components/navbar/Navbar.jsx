import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="/images/logo.png" alt="Logo image" className="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li class="nav-item">
                <a
                  class="nav-link active white_color"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active white_color" href="#">
                  Projects
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active white_color" href="#">
                  About Us
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active white_color" href="#">
                  Terms & Conditions
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active white_color" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <button class="btn btn-navbar" type="submit">
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
