import React from "react";

const Props = (props) => {
  return (
    <>
      <div style={{ backgroundColor: "skyblue", margin: 10, padding: 13 }}>
        <h4>
          Name : {props.fname} Email: {props.email} Marks: {props.marks};
        </h4>
      </div>
    </>
  );
};

export default Props;
