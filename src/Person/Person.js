import React from "react";
import "./Person.css";
const person = (props) => {
  return (
    <div className="Person">
      <p>
        I am a {props.name} and i am {props.age} years old !
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
