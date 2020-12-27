import React from "react";
import "./Button.css";

export const Buttons = ({ onClick, value, disabled, bigButton }) => {
  return (
    <>
      <button
        className={bigButton === true ? "bigButton" : "letterButtons"}
        disabled={disabled}
        onClick={onClick}
      >
        {value}
      </button>
    </>
  );
};
