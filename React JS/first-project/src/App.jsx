import React from 'react'


function Mycomponent(props){
  return (
    <div>
      {props.name}
    </div>
  )
}





const App = () => {
  return (
    <div>
     Hello <Mycomponent name={"ALi"} /> <Mycomponent name={"Raza"} />
      <Mycomponent name={"ALi"} />
    </div>
  );
}

export default App