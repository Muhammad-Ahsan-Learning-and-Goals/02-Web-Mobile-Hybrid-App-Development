import React, { useState } from "react";

const Usestate = () => {

  let [num, setNum] = useState(10);

  function onClickhandle() {
    setNum(num + 1);
  }

  function onClickhandl(){
    setNum(num - 1);
  }
  return (
    <>
      <div>
        <p>{num}</p>
        <button onClick={onClickhandle}> + </button>
        <button onClick={onClickhandl}> - </button>
      </div>
    </>
  );
};

export default Usestate;
