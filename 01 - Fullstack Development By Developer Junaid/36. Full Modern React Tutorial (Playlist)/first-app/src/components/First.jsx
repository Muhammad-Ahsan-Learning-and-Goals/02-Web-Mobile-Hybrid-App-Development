import React from "react";

const First = () => {
  const title = "Welcome to The Blog";
  const likes = 50;
  const person = { fname: "Muhammad Ahsan", age: 20 };
  const link = "https://www.facebook.com/";
  return (
    <div>
      <h1>{title}</h1>
      <p>Post Liked {likes} times</p>
      <p>
        My Name is {person.fname}i am {person.age} Years old.
      </p>
      <p>{Math.random() * 10}</p>
      <a href={link}>Go to Faebook</a>
    </div>
  );
};

export default First;
