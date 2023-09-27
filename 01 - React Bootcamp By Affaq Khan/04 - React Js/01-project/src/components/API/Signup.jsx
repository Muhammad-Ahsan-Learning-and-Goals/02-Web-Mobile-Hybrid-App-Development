import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolContact, setSchoolContact] = useState("");
  const [phone, setPhone] = useState("");

  const formData = {
    firstName,
    lastName,
    password,
    email,
    dob,
    age,
    schoolName,
    schoolContact,
    phone,
  };
  //   Submit Form Function

  const submitForm = async () => {
    try {
      await axios.post(
        "https://wandering-boa-wear.cyclic.app/signup/",
        formData
      );
      navigate("/signin");
    } catch (error) {
      alert("Something Wrong in API");
    }
  };

  return (
    <>
      <div className="heading text-center mt-5">
        <h2> Heading</h2>
      </div>
      <div className="container mt-3">
        <form>
          <div className="row" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group col-md-6 ">
              <label htmlFor="inputEmail4">First Name</label>
              <input
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Last Name</label>
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-6">
              <label htmlFor="inputAddress">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group col-6">
              <label htmlFor="inputAddress2">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">School Name</label>
              <input
                type="text"
                className="form-control"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Age</label>
              <input
                type="number"
                className="form-control"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">DOB</label>
              <input
                type="date"
                className="form-control"
                id="inputZip"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-6">
              <label htmlFor="inputAddress">School Contact </label>
              <input
                type="number"
                className="form-control"
                value={schoolContact}
                onChange={(e) => setSchoolContact(e.target.value)}
              />
            </div>

            <div className="form-group col-6">
              <label htmlFor="inputAddress2">Phone Number</label>
              <input
                type="number"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="container text-center ">
            
            <button className="btn btn-primary  mt-4" onClick={submitForm}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
