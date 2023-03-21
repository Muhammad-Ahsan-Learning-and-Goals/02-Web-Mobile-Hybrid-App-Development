import "./MovieApp.css";

const MovieApp = (props) => {
  return (
    <div className=" main1">
      <img src={props.img} alt="" />

      <p>{props.title}</p>
      <p>{props.year}</p>
    </div>
  );
};

export default MovieApp;
