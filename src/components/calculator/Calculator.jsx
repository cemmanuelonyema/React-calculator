import React from "react";
import { Buttons } from "../buttons/Buttons";
import { DIsplay } from "../display/DIsplay";
import "./calculator.css";

export const Calculator = () => {
  return (
    <main className="calculator">
      <DIsplay />
      <Buttons />
    </main>
  );
};
