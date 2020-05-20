import React from "react";

export const Button = ({onClick, value}) => {
  return (
    <div>
      <button onClick={onClick}>{value}</button>
    </div>
  );
};
