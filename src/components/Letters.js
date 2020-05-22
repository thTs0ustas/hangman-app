import React from "react";

export const Letters = ({ letter, onClick }) => {
  return <button onClick={onClick}>{letter}</button>;
};
