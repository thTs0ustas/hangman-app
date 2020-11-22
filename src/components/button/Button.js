import React from "react";
import "./Button.css";

export const Buttons = ({ onClick, value, disabled, bigbutton }) => {
  return (
    <>
      <button
        className={bigbutton === true ? "bigbutton" : "letterButtons"}
        disabled={disabled}
        onClick={onClick}
      >
        {value}
      </button>
    </>
  );
};
