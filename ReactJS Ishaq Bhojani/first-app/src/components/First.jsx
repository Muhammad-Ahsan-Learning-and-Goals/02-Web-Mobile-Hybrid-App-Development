import React from 'react'

const First = () => {

    let arr= ['item1' , 'item2']
  return (
    <div>

        <App title ={arr[0]}/>;
        <App title ={arr[1]}/>;
    </div>
  )
}

export default First;
