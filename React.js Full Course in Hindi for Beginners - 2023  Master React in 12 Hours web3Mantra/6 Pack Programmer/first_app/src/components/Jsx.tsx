import "./Jsx.css";
import Props from "./Props";

function Props1() {
  return (
    <>
      <div></div>

      <Props />
    </>
  );}

export default Props1;





// 🌟🌟 const Function1 = ({ className1, name, income = 100 }) => {
//   return (
//     <>
//       <div className={className1}>
//         {name} : ${income}
//       </div>

//       <hr />
//     </>
//   );
// };

// function Function2() {
//   return (
//     <>
//       <Function1 name={"Ali"} className1="div1" income={2000} />

//       <Function1 name={"Raza"} className1="div2" income={4000} />
//       <Function1 name={"Ahsan"} className1="div3" />
//     </>
//   );
// }

// export { Function1, Function2 };
