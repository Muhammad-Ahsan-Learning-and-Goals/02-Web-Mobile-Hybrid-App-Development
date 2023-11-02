import React from 'react'
import Row from '../common/Row';
import UserIcon from "../svgs/UserIcon";
import CartIcon from "../svgs/BucketIcon";
import 

const HeaderButon = () => {
  return (
 
     <Row>
        <CartIcon />

        <p className=" text-[#1e2832] hover:text-slate-400 mr-20 ml-15  text-[18px]">
          Cart
        </p>
        
        </Row>
   
  );
}

export default HeaderButon;