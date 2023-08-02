import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div>
        {/* 🌟🌟    Under Standing React Props Concetps */}

        {/* <h2>
        The Name Of My Brothers Are <Mycomponent name="Ali" income="3500" />
        <Mycomponent name="Raza" income="2000" />{" "}
        <Mycomponent name="Muhammad" income="1500" />
        and <Mycomponent name="Ahsan" />
      </h2>
    </div>
  );
};

const Mycomponent = ({ name, income =800 }) => {
  return (
    <div>
      <p>
        {name} : {income}
      </p> */}
      </div>


      {/* 🌟🌟   Multiple Component */}

      <div>

        <Header/>
      </div>
    </>
  );
};

export default App;
