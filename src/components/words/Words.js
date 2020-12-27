import React from "react";
import "./words.css";

import { Buttons } from "../button/Button";
import { useWordsModel } from "./useWordsModel";

const letters = "abcdefghijklmnopqrstuvxwyz".split("");

export const Words = () => {
  const {
    letterMap,
    word,
    guess,
    gaps,
    setStart,
    setRestart,
    status,
    wrongTries,
  } = useWordsModel();

  return (
    <div className="gameContainer">
      <h3>{status || "Press Start"}</h3>

      <h1 className="word">{gaps || "................."}</h1>
      <p>{`Retries Left: ${6 - wrongTries}`}</p>
      <p>
        Your Guesses: <span>{guess}</span>
      </p>

      <div className="buttonsContainer">{letterMap(letters)}</div>
      <div className="startResetButtons">
        <Buttons
          bigButton={true}
          value={"Start"}
          disabled={word}
          onClick={setStart}
        />
        <Buttons
          bigButton={true}
          value={"Restart"}
          disabled={!word}
          onClick={setRestart}
        />
      </div>
    </div>
  );
};
