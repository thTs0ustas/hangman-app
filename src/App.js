import React from "react";
import "./App.css";
import { Game } from "./components/game/Game";
import { Grid } from "@material-ui/core";

import randomWords from "random-words";

// const aBetterWay = (word, guessed) =>
//    word.split('').map(e => guessed.includes(e) ? `${e} ` : '_ ').join('')

// console.log(randomWords());

function App() {
  return (
    <Grid container alignContent={"center"}>
      <Grid xs={12} sm={10} item>
        <Game />
      </Grid>
    </Grid>
  );
}

export default App;
