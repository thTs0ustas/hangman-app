import React from "react";
//import Button from "@material-ui/core/Button";
import "./Button.css";

export const Buttons = ({ onClick, value, disabled }) => {
  return (
    <div className="buttonsContainer">
      <button
        className="letterButtons"
        color='primary'
        disabled={disabled}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
};
