import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            <img src="/images/logo.png" alt="Logo image" className="logo" />
          </Link>
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
                <Link
                  class="nav-link active white_color"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active white_color" to="/projects">
                  Projects
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active white_color" to="/about">
                  About Us
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  class="nav-link active white_color"
                  to="/terms-and-conditions"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active white_color" to="/contact">
                  Contact Us
                </Link>
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
