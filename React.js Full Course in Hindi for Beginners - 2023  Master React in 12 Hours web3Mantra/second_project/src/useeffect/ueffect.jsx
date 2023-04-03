import "./ueffect.css";
import { useEffect } from "react";

function Ueffect() {

  useEffect(() => {

console.log("USeEffect Called");

  })

  console.log("Function Body Called");

  return (
    <div>
      <h2 className="head1"> ueffect Hook </h2>
      {console.log("Inside JSX")}

    </div>
  );
}

export default Ueffect;
