import React from 'react'

const Home = () => {
    const handleClick=()=>{
        console.log('helo, World');


        const handleClickAgain=(name)=>{
        console.log('helo,+ name');

    }
  return (
    <>
      <div className="Home">

        <h1>Homepage</h1>
        <button onClick={handleClick}>Click Me</button>

        <button onClick={handleClickAgain('Ali')}>Click Me again</button>

      </div>
    </>
  );
}
}
export default Home;