import React, { useState } from "react";

function Validation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleName = (e) => {
    const name = e.target.value;
    setName(name);
    setNameError(name.length < 3);
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    setEmailError(!email.match(emailRegex));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length >= 3 && email.match(emailRegex)) {
      alert("Form Has Been Submitted Successfully");
      alert("Name: " + name + ", Email: " + email);
    }
  };

  return (
    <div>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Enter your Name"
          onChange={handleName}
        />
        {nameError && (
          <span style={{ color: "red" }}>
            Name Length must be greater than 2 characters
          </span>
        )}
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Enter your Email"
          onChange={handleEmail}
        />
        {emailError && <span style={{ color: "red" }}>Invalid Email</span>}
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Validation;
