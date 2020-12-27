import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { wordsSelector } from "./selector";
import {
  letsStart,
  restart,
  settingLetter,
  settingWinnerOrLoser,
} from "../../redux";

import { Buttons } from "../button/Button";

export const useWordsModel = () => {
  const dispatch = useDispatch();
  const { words, tries, game } = useSelector(wordsSelector);

  const dispatchers = {
    setStart: () => dispatch(letsStart()),
    setRestart: () => dispatch(restart()),
    winnerLoser: () => dispatch(settingWinnerOrLoser()),
    setLetter: (letter) => dispatch(settingLetter(letter)),
  };

  const disable = (letter) =>
    !words.word || tries.guess.includes(letter) || game.title !== "Lets Play";

  const letterMap = (mapping) =>
    mapping.map((letter, index) => (
      <React.Fragment key={index}>
        <Buttons
          disabled={disable(letter)}
          value={letter}
          onClick={() => {
            dispatchers.setLetter(letter);
            dispatchers.winnerLoser();
          }}
        />
      </React.Fragment>
    ));

  const props = {
    status: game?.title,
    guess: tries?.guess,
    gaps: words?.gaps,
    word: words?.word,
    wrongTries: tries.wrongTries,
    letterMap,
  };

  return {
    ...dispatchers,
    ...props,
  };
};
