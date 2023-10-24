import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* ✅ Counter Inside the Button */}

      <div className="mt-5 text-center">
        <h2>This is Counter Component</h2>

        <button onClick={() => setCount((count) => count + 1)} className="mt-2">
          count is {count}
        </button>
      </div>

      {/* ✅ Counter Inside the Button End */}

      
    </>
  );
};

export default Counter;
