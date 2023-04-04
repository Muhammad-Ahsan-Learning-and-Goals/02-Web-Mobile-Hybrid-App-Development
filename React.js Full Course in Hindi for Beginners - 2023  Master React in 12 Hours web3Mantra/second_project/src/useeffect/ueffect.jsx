import "./ueffect.css";
import { useEffect, useState } from "react";

function Ueffect() {
  const [state, setState] = useState(3);
  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log("USeEffect Called");
    // async await is used insted upper comment

    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );

      const res = await get.json();
      setData(res);
      console.log(res);

    }
    getData();

    document.title = `(${state}) Eployee Online`; 

  }, [state]);
 
  return (
    <div>
      <button onClick={() => setState(state + 2)}>Click Me {state} </button>
      {data.map((element, index) => {
        return (
          <div className="data" key={index}>
            <h4>{element.firstName}</h4>
            <h4>{element.lastName}</h4>
            <h4>{element.email}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Ueffect;
