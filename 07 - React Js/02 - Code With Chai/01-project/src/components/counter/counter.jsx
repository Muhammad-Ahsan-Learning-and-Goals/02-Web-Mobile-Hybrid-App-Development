import { useState } from "react";

const Counter = () => {
  //   let counter = 10;

  let [counter, setCounter] = useState(4);

  const addValue = () => {
    // counter = counter+1;

    setCounter(counter + 1);

    
    setCounter((previouscounter) => previouscounter + 1);

    setCounter((previouscounter) => previouscounter + 1);
    setCounter((previouscounter) => previouscounter + 1);
    setCounter((previouscounter) => previouscounter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div>
        <h3> Conuter Vaues : {counter} </h3>

        <button
          className="bg-green-500 rounded-xl text-black p-4 "
          onClick={addValue}
        >
          Add Value
        </button>
        <br />
        <br />
        <button
          className="bg-green-500 rounded text-black p-4"
          onClick={removeValue}
        >
          Remove Value
        </button>
      </div>
    </>
  );
};

export default Counter;
