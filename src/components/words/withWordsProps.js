import React from "react";
import { useWordsModel } from "./useWordsModel";
//import {Grid} from "@material-ui/core";
import { Buttons } from "../button/Button";

const withWordsProps = (Component) => (props) => {
  const {
    words: { words, game, tries },
    setStart,
    setRestart,
    winnerLoser,
    setLetter,
  } = useWordsModel();
  console.log(words);
  const letterMap = (mapping) =>
    mapping.map((letter, index) => (
      <React.Fragment key={index}>
        <Buttons
          variant="contained"
          color="secondary"
          disabled={
            !words.word ||
            tries.guess.includes(letter) ||
            game.title === "We have a Winner !!!" ||
            game.title === "Aaand I'm dead !!!"
          }
          value={letter}
          onClick={() => [setLetter(letter), winnerLoser()]}
        />
      </React.Fragment>
    ));

  return (
    <Component
      wrongTries={tries.wrongTries}
      guess={tries.guess}
      gaps={words.gaps}
      word={words.word}
      status={game.title}
      setStart={setStart}
      setRestart={setRestart}
      winnerLoser={winnerLoser}
      letterMap={letterMap}
      {...props}
    />
  );
};

export default withWordsProps;
