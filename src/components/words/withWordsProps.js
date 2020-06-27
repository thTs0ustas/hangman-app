import React, { useEffect } from "react";

import { useWordsModel } from "./useWordsModel";

const withWordsProps = (Component) => (props) => {
  const {
    words: { guess, gaps, word, status, wrongTries },
    setStart,
    setRestart,
    winnerLosser,
    setLetter,
  } = useWordsModel();

  useEffect(() => {
    winnerLosser();
  }, [gaps]);

  return (
    <Component
      wrongTries={wrongTries}
      guess={guess}
      gaps={gaps}
      word={word}
      status={status}
      setStart={setStart}
      setRestart={setRestart}
      winnerLosser={winnerLosser}
      setLetter={setLetter}
      {...props}
    />
  );
};

export default withWordsProps;
