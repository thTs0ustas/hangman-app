import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  letsStart,
  settingLetter,
  settingWinnerOrLosser,
  restart,
} from "../redux/actions";
import { Button } from "./Button";
import "./words.css";

const Words = ({
  restart,
  guess,
  gaps,
  word,
  status,
  letsStart,
  settingLetter,
  wrongTries,
  settingWinnerOrLosser,
}) => {
  const letters = "abcdefghijklmnopqrstuxwyz".split("");

  useEffect(() => {
    let fn = () => settingWinnerOrLosser();
    fn();
  }, [settingWinnerOrLosser, guess]);

  const letsSeeIfItCanBePressed = (letter) => {
    if (
      !status ||
      guess.includes(letter) ||
      status === "We have a Winner !!!" ||
      status === "Aaand I'm dead !!!"
    ) {
      return;
    } else {
      settingLetter(letter);
    }
  };

  return (
    <div className='gameContainer'>
      <div className="stringsThatShowsStaff">
        <h4>{`Status: ${status || "Loading...."}`}</h4>
        <p>{`Number of wrong tries: ${wrongTries}`}</p>
        <p>{`Your Guesses: ${`${guess} `}`}</p>
        <h4>{`Word: ${gaps}`}</h4>
      </div>
      <div className="letters">
        {letters.map((letter, index) => (
          <Button
            style={ {display: guess.includes(letter)? 'none':'inherit'} }
            type="button"
            key={index}
            value={letter}
            onClick={() => letsSeeIfItCanBePressed(letter)}
          />
        ))}
      </div>
      <button disabled={word} onClick={letsStart}>
        Start Game
      </button>
      <button disabled={!word} onClick={restart}>
        Restart Game
      </button>
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {
  restart,
  letsStart,
  settingLetter,
  settingWinnerOrLosser,
})(Words);
