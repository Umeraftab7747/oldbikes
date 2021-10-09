import React from "react";
import "./Button.css";

const Button = ({ text, onclick }) => {
  return (
    <div onClick={onclick} className="buttoncontainer">
      <p>{text}</p>
    </div>
  );
};

export default Button;
