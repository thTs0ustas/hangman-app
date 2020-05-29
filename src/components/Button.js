import React from "react";
import "./Button.css";

export const Button = ({ onClick, value, style, disabled }) => {
  return (
    <div className="buttonsContainer">
      <button
        className="letterButtons"
        disabled={disabled}
        style={style}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
};
