import React from "react";
import "./words.css";

import { Buttons } from "../button/Button";
import { useWordsModel } from "./useWordsModel";

const letters = "abcdefghijklmnopqrstuvxwyz".split("");
const gameLostAfterThisTries = 6

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
      <div
        className={"status"}
        style={{
          height: 40,
          textAlign: "center",
          fontSize: 22,
          marginTop: ".75rem",
          fontWeight: "600",
        }}
      >
        {status || "Press Start"}
      </div>

      <h1 className="word">{gaps || "................."}</h1>
      <p>{`Retries Left: ${gameLostAfterThisTries - wrongTries}`}</p>
      <p>
        Your Guesses: <span>{`${guess} `}</span>
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
