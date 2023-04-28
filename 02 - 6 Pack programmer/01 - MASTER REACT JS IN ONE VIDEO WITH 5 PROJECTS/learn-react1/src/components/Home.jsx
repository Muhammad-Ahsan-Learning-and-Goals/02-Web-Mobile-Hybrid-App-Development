import React from "react";
import Products from "./Products";

const Home = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div>
      {arr.map((i) => (
        <Products value={i} key={i} />
        
      ))}
    </div>
  );
};
export default Home;

// import React from 'react'
// import Products from './Products'

// const Home = () => {
//   const arr = [1,2,3,4];
//   return (
//     <div>
//       {arr.map(i=>(
//         <Products value = {i} key= {i} />
//         ))}
//     </div>
//   ) ;
// };

// export default Home;

// const Home = () =>{
//   const arr = [1, 2, 3, 4];
//   return (
//     <div>
//       {arr.map((i) => (
//         <Products value={i} key={i} />
//       ))}
//     </div>
//   );
// }
// export default Home;
