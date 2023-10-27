import React from "react";
import Cards from "./Cards";

const Props = () => {
  let obj={
    name: "Raza",
    age:12,
  }
  let newArr =[
    1,2,3,4
  ]
  return (
    <>
      <div className="container">
        <h3 className="bg-green-400 text-black p-4 rounded-xl">
          This is props
        </h3>
        <div className="row">
          <div className="col-4 col-sm-4 col-lg-4">
            <Cards name="Muhammad Ahsan" btnTxt="  Click Me" />
            <div className="col-4 col-sm-4 col-lg-4">
              <Cards fname="Raza" btnTxt="  Visit  Me" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Props;
