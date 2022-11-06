import React from "react";
import "./Button.css";

export const Button = ({ btn }) => {
  return (
    <button className={` button ${btn === "=" ? "equals" : ""}`}>{btn}</button>
  );
};
