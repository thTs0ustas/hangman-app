import React from "react";
import "./App.css";
import {Game} from "./components/game/Game";
import {Grid} from "@material-ui/core";

function App() {
   return (
     <Grid container xs={12} sm={10} alignContent={"center"}>
        <Grid item>

           <Game/>

        </Grid>
     </Grid>
   );
}

export default App;
