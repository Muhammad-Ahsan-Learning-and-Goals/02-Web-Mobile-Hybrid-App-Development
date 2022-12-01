import React from "react";
import { ReactDOM } from "react";

let cssStyle = {};

let curDate = new Date(2022, 5, 5, 20);
curDate = curDate.getHours();
let greeting = "";

if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning ";
  cssStyle.color = "green";
} else if (curDate >= 12 && curDate < 19) {
  greeting = "good Afternon";
  cssStyle.color = "Orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "Red";
}
function Challenge3() {
  return (
    <>
      <div>
        <h1>
          Hello , <span style={cssStyle}> {greeting}</span>
        </h1>
      </div>
    </>
  );
}

export default Challenge3;
