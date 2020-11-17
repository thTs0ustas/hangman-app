import React from "react";
import "./App.css";
import {Game} from "./components/game/Game";
import {Grid} from "@material-ui/core";

const aBetterWay = (word, guessed) =>
   word.split('').map(e => guessed.includes(e) ? `${e} ` : '_ ').join('')


console.log(aBetterWay('black', 'acdfrt'))


function App() {
   return (
      <Grid container alignContent={"center"}>
         <Grid xs={12} sm={10} item>
            <Game/>
         </Grid>
      </Grid>
   );
}

export default App;
