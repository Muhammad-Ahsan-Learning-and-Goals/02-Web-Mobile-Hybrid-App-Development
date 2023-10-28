import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("Hey The Form has Submitted");

    const formBody = {
      name,
      email,
      message,
    };
    console.log(formBody);
  };

  return (
    <>
      <h2> Contact Form</h2>

      <form onSubmit={onSubmitForm}>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
          placeholder="Name"
        />

        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          placeholder="Email"
        />

        <textarea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
          placeholder="Message"
          type="text"
        />

        <input type="submit" value="submit Message" />
      </form>
    </>
  );
};

export default Form;
