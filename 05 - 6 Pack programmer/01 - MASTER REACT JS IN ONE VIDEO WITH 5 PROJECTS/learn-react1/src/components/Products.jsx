import React from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const params = useParams();

  return (
    <div>
      <h1>#{params.id}</h1>
    </div>
  );
};

export default Products;

// import React from 'react'
// import{useParams} from 'react-router-dom';

// const Products = () => {
//     const params = useParams()
//   return (
//     <div>
//       {/* <h1>#productId</h1> */}

//       <h1>#{params.id}</h1>
//     </div>
//   );
// }

// export default Products;
