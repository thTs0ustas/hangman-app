import React from "react";
import { connect } from "react-redux";
import {
  letsStart,
  settingLetter,
  settingWinnerOrLosser,
  restart,
} from "../../redux/actions";
import { Button } from "../button/Button";
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
  const letters = "abcdefghijklmnopqrstuvxwyz".split("");

  const letsSeeIfItCanBePressed = (letter) => settingLetter(letter);

  return (
    <div className="gameContainer">
      <div className="stringsThatShowsStaff">
        <h4>{`Status: ${status || "Loading...."}`}</h4>
        <p>{`Number of wrong tries: ${wrongTries}`}</p>
        <p>{`Your Guesses: ${`${guess} `}`}</p>
        <h4>{`Word: ${gaps}`}</h4>
      </div>
      <div className="letters">
        {letters.map((letter, index) => (
          <Button
            type="button"
            disabled={
              !status ||
              guess.includes(letter) ||
              status === "We have a Winner !!!" ||
              status === "Aaand I'm dead !!!"
            }
            key={index}
            value={letter}
            onClick={() => [
              letsSeeIfItCanBePressed(letter),
              settingWinnerOrLosser(),
            ]}
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
