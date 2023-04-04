import React from "react";
import "./App1.css";

let a = 10;
let result = "";

if (a < 50) {
    result = "True";
} else {
    result = "False";
}

const App1 = () => {
    return (
        <>
            <div>
                <h4 className="App1"> App1 Sub Component</h4>

                {result}
                {/* 🌟🌟 Ternrary oprator */}

                <h2> {a > 5 ? "Agree" : "Disagree"}</h2>
            </div>
        </>
    );
};

function Propss(props) {
    return (
        <div>
            <h3>
                My Name is {props.name} . I Am {props.age} Years old. I am Learning
                {props.calss}
            </h3>
            
        </div>
    );
}

export { App1, Propss };
