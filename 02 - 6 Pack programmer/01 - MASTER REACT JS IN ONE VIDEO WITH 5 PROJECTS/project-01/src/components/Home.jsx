import React from "react";
import vg from "../assets/2.webp";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>Tech</h1>
          <p> SOlove All Your Proplems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi.
            sint inventore soluta nobis quidem ipsam reprehenderit consequatur
            odit nemo repudiandae!
          </p>
        </div>
      </div>

      <div className="home3">
        <div>
          <h1>Who We Are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            eligendi fuga quidem velit architecto voluptas omnis impedit nemo.
            Porro provident assumenda reiciendi 
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
