import "./MovieApp.css";

const MovieApp = (props) => {
  return (
    <div className=" main1">
      <img src={props.img} alt="" />

      <p>{props.title}</p>
      <p>{props.year}</p>
      <p>{props.type}</p>
      
    </div>
  );
};


function Footer() {
  return (
    <div className="footer">
      <h2>
        Copywrite @ 2023 <a href="https://github.com/ahsanshareef21">Muhammad Ahsan</a>
      </h2>
    </div>
  );
}


export  {MovieApp, Footer};
