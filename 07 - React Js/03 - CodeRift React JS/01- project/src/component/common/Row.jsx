// import React from "react";
// import RotatedSquare from "../svgs/RotatedSquare";

// const Row = () => {
//   return (
//     <>
//       <div>
//         <RotatedSquare />
//       </div>
//     </>
//   );
// };


import React from 'react';
const Row = ({ className, children }) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

export default Row;