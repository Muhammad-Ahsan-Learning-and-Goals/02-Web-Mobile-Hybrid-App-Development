
import React, { useState } from "react";

const Usestate = () => {
  const [num, setNum] = useState(25);

  const [persons, setPersons] = useState(["Muhammad", "Ahsan", "Ali", "Raza"]);

  let [person , setPerson]=useState({
    fname:"ALI",
    age:24,
    class:"BSC"

  })

  function Increment() {
    // if (num >= 30) return;
    setNum(num + 1);
  }

  function Decrement() {
    //  if (num <= 20) return;
    setNum(num - 1);
  }

  let namechang  = () => {
    setPersons([...persons, 'Khan'])

  }

  let changeage = ()=> {
    // setPerson({...person, age : 34})
    
    person.age=30
    console.log(person)
  }
  return (
    <>
      <div className="state1">
        <p>{num}</p>
        <button disabled={num >= 30 ? true : false} onClick={Increment}>
          +
        </button>
        <button disabled={num <= 20 ? true : false} onClick={Decrement}>
          -
        </button>
      </div>

      <br />

      <div>
        <ul>
          {persons.map((person, index) =>
            <li key={index}>{person}</li>
          )}
        </ul>
      </div>

      <div>
        <button onClick={namechang}> Change the Name</button>
      </div>

      <div>

        <button onClick={changeage}>Change Age</button>
      </div>
    </>
  );
};

export default Usestate;
