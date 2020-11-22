import React from "react";
import "./words.css";

import { Buttons } from "../button/Button";

const letters = "abcdefghijklmnopqrstuvxwyz".split("");

export const Words = ({
  wrongTries,
  guess,
  gaps,
  word,
  status,
  setStart,
  setRestart,
  letterMap,
}) => {
  console.log(status);

  return (
    <div className="gameContainer">
      {`Status: ${status || "Loading...."}`}

      <p>{`Number of wrong tries: ${wrongTries || 0}`}</p>
      <p>{`Your Guesses: ${guess}`}</p>
      <h4>{`Word: ${gaps || "Press Start"}`}</h4>

      <div className={"buttonsContainer"}>{letterMap(letters)}</div>
      <div className="startResetButtons">
        <Buttons
          bigbutton={true}
          value={"Start"}
          disabled={word}
          onClick={setStart}
        />
        <Buttons
          bigbutton={true}
          value={"Restart"}
          disabled={!word}
          onClick={setRestart}
        />
      </div>
    </div>
  );
};
