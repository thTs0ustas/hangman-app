import React from "react";
import { connect } from "react-redux";
import { letsStart, pressingButton } from "../redux/actions";
import { Letters } from "./Letters";

const Words = ({ tries, pressingButton, word, letsStart }) => {
  const gapWord = Array(word.length).fill("_ ").join("");
  const letterString = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div>
      <div>
        <h4>{`Number of tries: ${tries}`}</h4>
        <h4>{gapWord}</h4>
      </div>
      {letterString.map((e, index) => (
        <Letters key={index} letter={e} onClick={() => pressingButton(e)} />
      ))}
      <button onClick={letsStart}>Lets Start</button>
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {
  letsStart,
  pressingButton,
})(Words);
