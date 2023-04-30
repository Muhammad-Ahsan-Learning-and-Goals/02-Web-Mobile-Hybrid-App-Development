
const Heading=({name, age})=>{

    // const obj= {
    //     a : "react",
    //     age : 12, 
    // }

    // const {a,age } = obj;

    return (
      <>
        <h3> my Name is {name} </h3>
        <main> my age is {age} </main>
        <footer>This is Footer </footer>
      </>
    );
}


const Heading1 = () => <h2> This is Exported Heading 1</h2>;
const Heading2 = () => <h2> This is Exported Heading 2</h2>;
const Heading3 = () => <h2> This is Exported Heading 3</h2>;

export {Heading1, Heading2, Heading3, Heading};
