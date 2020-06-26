import React from "react";

export const Letters = ({ value, onClick }) => {
  return <button onClick={onClick}>{value}</button>;
};
