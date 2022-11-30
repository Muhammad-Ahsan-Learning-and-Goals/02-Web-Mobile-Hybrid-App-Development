import React, { useState } from "react";

function App1() {
  let [count, setCount] = useState(1);

//   count = 1;
// setCount(3)

  return (
  <>
  <h2> value of Counter is : {count} </h2>
  </>
  )  
}

export default App1;
