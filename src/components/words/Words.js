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
      <h3>{`Status: ${status || "Press Start"}`}</h3>

      <h1 className="word">{gaps || "................."}</h1>
      <p>{`Retries Left: ${6 - wrongTries || 6}`}</p>
      <p>
        Your Guesses: <span>{guess}</span>
      </p>

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
