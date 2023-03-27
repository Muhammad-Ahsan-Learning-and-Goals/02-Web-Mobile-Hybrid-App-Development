import "./Jsx.css";

const Function1 = ({className1 ,name, income}) => {
  return <div className={className1}> {name} : ${income}</div>;
};

function Function2() {
  return (
    <>
      <Function1 name={"Ali"} className1="div1" income={2000} />

      <Function1 name={"Raza"} className1="div2" income={4000} />
      <Function1 name={"Ahsan"} className1="div3" income={5000} />
    </>
  );
}

export { Function1, Function2 };
