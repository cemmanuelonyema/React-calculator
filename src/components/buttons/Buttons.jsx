import React from "react";
import { Button } from "../button/Button";
import "./buttons.css";

export const Buttons = () => {
  const buttonValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  return (
    <section className="buttons">
      {buttonValues.flat().map((btn, i) => (
        <Button key={i} btn={btn} />
      ))}
    </section>
  );
};
