import React from "react";
import {useWordsModel} from "./useWordsModel";
import {Grid} from "@material-ui/core";
import {Buttons} from "../button/Button";

const withWordsProps = (Component) => (props) => {
  const {
    words: {guess, gaps, word, status, wrongTries},
    setStart,
    setRestart,
    winnerLoser,
    setLetter,

  } = useWordsModel();

  const letterMap = (mapping) => mapping.map((letter, index) =>
      <Grid  item xs={3}>
        <Buttons variant='contained'
                 color='secondary'
                 disabled={
                   !status ||
                   guess.includes(letter) ||
                   status === "We have a Winner !!!" ||
                   status === "Aaand I'm dead !!!"
                 }
                 key={index}
                 value={letter}
                 onClick={() => [setLetter(letter), winnerLoser()]}
        />
      </Grid>)

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
        letterMap={letterMap}
        {...props}
    />
  );
};

export default withWordsProps;