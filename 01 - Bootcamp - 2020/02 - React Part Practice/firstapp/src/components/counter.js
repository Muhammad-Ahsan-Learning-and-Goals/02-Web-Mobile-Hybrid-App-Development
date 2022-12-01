// import React, { useState, isMorning, Morning, Night } from "react";

// function Message() {
//   let [count, setCount] = useState(1);
//   return (
//     <>
//       <h4> Value of Count is : {count}</h4>

//       <button onClick={() => setCount(count + 1)}>Update Counter</button>
//     </>
//   );
// }
// export default Message;

//Pracice 02

import React, { useState } from "react";
function Counter() {
  let [count, setCount] = useState(1);

  let [isMorning, setMorning] = useState(true);
  return (
    <>
      <div className={`box ${isMorning ? `dayLight` : " "}`}>
        <h2>Have A Good {isMorning ? "Morning" : "Night"}</h2>

        <h1> The value is {count}:</h1>
        <button onClick={() => setCount(count + 2)}> Update Counter</button>
        <button onClick={() => setMorning(!isMorning)}>
          Have a Good Morning
        </button>
      </div>
    </>
  );
}
export default Counter;
