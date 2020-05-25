import React from "react";
import './Button.css'

export const Button = ({onClick, value,style}) => {
  return (
    <div className='buttonsContainer'>
      <button className='letterButtons' style={style} onClick={onClick}>{value}</button>
    </div>
  );
};
