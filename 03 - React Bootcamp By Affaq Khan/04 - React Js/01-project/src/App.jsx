import React from "react";
import Props from "./components/props/Props";
import { studentsInfo } from "./components/props/data";

const App = () => {
  // let carName = "KIA";
  // let carPrice ="10M";
  // let carColor= "Black";

  return (
    <>
      <div>
        <h3>App Component</h3>

        {/* <Props name={carName} color={carColor} price={carPrice} /> */}

        {studentsInfo.map((student) => (
          <>
            <h2>{student.name}</h2>
            <h3>{student.age}</h3>
            <p>{student.class}</p>
          </>
        ))}
      </div>
    </>
  );
};

export default App;
