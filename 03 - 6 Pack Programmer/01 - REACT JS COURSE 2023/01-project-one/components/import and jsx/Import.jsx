import React from "react";

const Import = (props) => {
  return (
    <div>
      < h3> Hello {props.name}</h3>
  
    </div>
  );
};



const JSX = () => {
  return (
    <div>
      <Import name = "Native App" /> <Import name="SEO" /> <Import name={" Flutter"} /> <Import name={" Php Larawel"} /> <Import name="Mobile App Devlopement" />
    </div>
  );
}

export default JSX;
