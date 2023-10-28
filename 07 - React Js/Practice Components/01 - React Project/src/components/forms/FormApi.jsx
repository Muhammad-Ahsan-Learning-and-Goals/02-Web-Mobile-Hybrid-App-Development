import React, { useState, useEffect } from "react";

const FormApi = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [todoID, setTodoID] = useState("");
  const [todoName, setTodoName] = useState("");

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
  useEffect(() => {
    async function todoItem() {
      console.log("Hell I'm called from UseEffect");

      //  API URL = https://dummyjson.com/todos/1

      const res = await fetch("https://dummyjson.com/todos/1");

      const response = await res.json();
      console.log(response);
      setTodoID(response.id);
      setTodoName(response.todo);
    }
    todoItem();
  }, []);

  return (
    <>
      <h2> Contact Form</h2>
      <h3> ID: {todoID}</h3>
      <h3> Todo Items: {todoName}</h3>
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
export default FormApi;
