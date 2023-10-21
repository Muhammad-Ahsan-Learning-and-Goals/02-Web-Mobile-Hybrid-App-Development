import React, { useEffect, useState } from "react";
import "./State.css";

const States = () => {
  const [count, setCount] = useState(0);
   const [result, setResult] = useState(0);


   useEffect(()=>{
    setResult(()=> count*2)
   })


//   useEffect(()=>{
//     setTimeout(()=>{
//         setCount((count)=>
//         count+1)
//     },1000)

//     },[])

  return (
    <>
      <h2> My count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h2> My Result is {result}</h2>
    </>
  );
};

export default States;

//   const  changeToYellow=()=>{
//     setColor("Yellow")
//   }

//    const changeToBlue = () => {
//      setColor("Blue");
//    };

//     const changeToPerpal = () => {
//       setColor("perpal");
//     };

//      const changeToBlack = () => {
//        setColor("Black");
//      };

//       const changeToWhite = () => {
//         setColor("White");
//       };

//   return (
//     <div className="main_div">
//       <h2> The State color is {color} </h2>

//       <button onClick={changeToYellow} className="increment_btn">
//         Yellow
//       </button>
//       <button onClick={changeToBlue} className="increment_btn">
//         Blue
//       </button>
//       <button onClick={changeToPerpal} className="increment_btn">
//         Perpal
//       </button>
//       <button onClick={changeToBlack} className="increment_btn">
//         Black
//       </button>
//       <button onClick={changeToWhite}>White</button>
//     </div>
//   );
// };
