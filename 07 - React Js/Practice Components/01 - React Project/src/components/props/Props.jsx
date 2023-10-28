import React, { useState } from 'react'

const Props = ({fName, lName}) => {

    const [color , setColor] = useState("Balck");

    const Togglebtn=()=>{
        if (color=="black"){
            setColor("navyblack");

        }else{
            setColor("black");
        }
    }

  return (
    <>
      <div>
        <button onClick={Togglebtn}> Click</button>
        <h2> My Favorite Color is {color}</h2>
      </div>

      <div>
        <h3>
          {" "}
          My First name {fName} & Last Name is {lName}{" "}
        </h3>
      </div>
    </>
  );
}

export default Props;