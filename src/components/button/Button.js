import React from "react";
import Button from "@material-ui/core/Button";
import "./Button.css";

export const Buttons = ({ onClick, value, disabled }) => {
  return (
    <div className="buttonsContainer">
      <Button
        className="letterButtons"
        color='primary'
        disabled={disabled}
        onClick={onClick}
      >
        {value}
      </Button>
    </div>
  );
};
