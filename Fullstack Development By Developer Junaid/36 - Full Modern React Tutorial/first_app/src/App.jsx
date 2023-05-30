import First from "./Component/First";
import Navbar from "./component/Navbar";

// import  Api from "./Component/Api";
import "./App.css";
const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <h2> App Component</h2>
        {/* <Api /> */}

        <First />
      </div>
    </>
  );
};

export default App;
