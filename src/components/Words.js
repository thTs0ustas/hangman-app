import React from "react";
import { connect } from "react-redux";
import { letsStart, settingLetter } from "../redux/actions";
import {Button} from './Button'
import './words.css'

const Words = ({ tries, gaps,status, letsStart, settingLetter, wrongTries }) => {
  const letters = 'abcdefghijklmnopqrstuxwyz'.split('')
  return (
    <div>
      <h3>{`Status: ${status || 'Loading....'}`}</h3>
      <div>
        <h4>{`Number of tries: ${tries}`}</h4>
        <h4>{`Number of wrong tries: ${wrongTries}`}</h4>
        <h4>{gaps}</h4>
      </div>
      <div className ='letters'>{letters.map((letter, index)=> <Button key={index} value={letter} onClick={()=>settingLetter(letter)}/>)}</div>
      
      <button onClick={letsStart}>Press</button>
    </div>
  );
};
const mapStateToProps = (state) => state;


export default connect(mapStateToProps, {
  letsStart,settingLetter
})(Words);
