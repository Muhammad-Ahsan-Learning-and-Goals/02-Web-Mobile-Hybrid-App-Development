import React from "react";

function Import ({name , cls , pay =10}){
  return (
    <>
      <div className={cls}>
        {name} : ${pay}
      </div>
      <hr />
    </>
  );
};



const JSX = () => {
  return (
    <div>
      <Import name={"Native App"} cls="div1" pay={200} />
      <Import name={"SEO"} cls="div2" pay={400} />
      <Import name={" Flutter"} cls="div3" pay={600} />
      <Import name={" Php Larawel"} cls="div4" />
      <Import name={"Mobile App Devlopement"} cls="div5" pay={900} />
    </div>
  );
}

export default JSX;
