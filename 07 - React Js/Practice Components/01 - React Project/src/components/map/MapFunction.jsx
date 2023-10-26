import React from "react";

import jsondata from "./data";

const MapFunction = () => {
  // const {data}= jsondata; 
  return (
    <div>

      <h4> MapFunction </h4>
      {jsondata.map((item, key) => {
        return (
          <>
            <h5> {item.name} </h5>
            <h5> {item.age} </h5>
          </>
        );
    }
        )
        }
    </div>
  );
};
export default MapFunction;
