import { useState } from "react";
const Counter = () => {
  let [num, setNum] = useState(19);

  let increment = () => {
    setNum(num + 1);
  };

  let decrement = () => {
    setNum(num - 1);
  };

  return (
    <>
      <div>
        <p>{num}</p>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
      </div>
    </>
  );
};

export default Counter;
