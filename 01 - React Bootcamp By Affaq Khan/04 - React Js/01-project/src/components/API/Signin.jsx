import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fomData = { email, password };

  const formSubmit = async () => {
    try {
      await axios.post(
        "https://wandering-boa-wear.cyclic.app/signin/",
        fomData
      );
      navigate("/signin");
    } catch (error) {
      alert("Something Wrong in API");
    }
  };

  return (
    <>
      <div className="container mt-5 ">
        <h2 className="text-center"> Log in </h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="form-group col-6 col-lg-6 col-sm-6">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={(e) => e.setEmail(e.target.value)}
              />
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={(e) => e.setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="container mt-3 text-center">
            <button className="btn btn-primary" onClick={formSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Signin;
