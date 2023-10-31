import React, { useState } from 'react'

const Bgcolor = () => {
    const [color, setColor] = useState("Olive");
  return (
    <div
      className="W-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3">

      <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
         
       <button className='outline-none'> Red</button>
      </div>
    </div>
    </div>
  );
}

export default Bgcolor