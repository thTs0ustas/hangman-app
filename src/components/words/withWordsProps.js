import React from "react";

import {useWordsModel} from "./useWordsModel";

const withWordsProps = (Component) => (props) => {
  const {
    words: {guess, gaps, word, status, wrongTries},
    setStart,
    setRestart,
    winnerLoser,
    setLetter,
  } = useWordsModel();

  return (
    <Component
        wrongTries={wrongTries}
        guess={guess}
        gaps={gaps}
        word={word}
        status={status}
        setStart={setStart}
        setRestart={setRestart}
        winnerLoser={winnerLoser}
        setLetter={setLetter}
        {...props}
    />
  );
};

export default withWordsProps;
