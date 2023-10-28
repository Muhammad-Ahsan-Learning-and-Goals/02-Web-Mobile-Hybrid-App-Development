import React from "react";
import Counter from "./counter/Counter";
import "./MainComponentApp.css";
import MapFunction from "./map/MapFunction";
import Props from "./props/Props";
import Form from "./forms/Form";
import FormApi from "./forms/FormApi";


const MainComponentApp = () => {
  return (
    <>
      <div>
        {/* ✅ Counter Component Start */}
        {/* <Counter /> */}
        {/*  Counter Component End */}

        {/* ✅ Map   Start */}
        {/* <MapFunction/> */}
        {/* Mqp   End */}

        {/* ✅ Props   Start */}

        {/* <Props fname= "Muhammad" lName="Ahsan" /> */}

        {/* ✅ Forms   Start */}

        {/* <Form /> */}

        {/* ✅ FormAPI  Start */}

        <FormApi/>


      </div>
    </>
  );
};

export default MainComponentApp;
