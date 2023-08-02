
const Header = () => {

    let inputValue;
    const changeHandler = (e)=>{
        inputValue =e.target.value;
        console.log(inputValue);
    }

    

  return (
  
    <>
      <div>

        <input
         style={{padding:10, border:"1px solid red"}}
          type="text" placeholder="Enter Something"
        onChange={changeHandler}

        
        
        /> 
      
  </div>
  </>
  );
};

export default Header;
