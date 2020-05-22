import React,{useEffect} from "react";
import { connect } from "react-redux";
import { letsStart, settingLetter } from "../redux/actions";
import {Button} from './Button'
import './words.css'

const Words = ({ tries, word ,status, letsStart, settingLetter, wrongTries }) => {
  const letters = 'abcdefghijklmnopqrstuxwyz'.split('')
  let gap = word.split('').map(element => element='_ ')
useEffect(()=>{
  
})
  return (
    <div>
      <h3>{`Status: ${status || 'Loading....'}`}</h3>
      <div>
        <h4>{`Number of tries: ${tries}`}</h4>
        <h4>{`Number of wrong tries: ${wrongTries}`}</h4>
        <h4>{gap}</h4>
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
