import React from "react";

import { Button } from "../button/Button";

import "./words.css";

export const Words = ({
  wrongTries,
  guess,
  gaps,
  word,
  status,
  setStart,
  setRestart,
  winnerLosser,
  setLetter,
}) => {
  const letters = "abcdefghijklmnopqrstuvxwyz".split("");

  const letsSeeIfItCanBePressed = (letter) => setLetter(letter);

  return (
    <div className="gameContainer">
      <div className="stringsThatShowsStaff">
        <h4>{`Status: ${status || "Loading...."}`}</h4>
        <p>{`Number of wrong tries: ${wrongTries || 0}`}</p>
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
            onClick={() => [letsSeeIfItCanBePressed(letter), winnerLosser()]}
          />
        ))}
      </div>
      <button disabled={word} onClick={setStart}>
        Start Game
      </button>
      <button disabled={!word} onClick={setRestart}>
        Restart Game
      </button>
    </div>
  );
};
