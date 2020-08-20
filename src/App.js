import React from "react";
import "./App.css";
import {Game} from "./components/game/Game";
import {Grid} from "@material-ui/core";

function App() {
    return (
        <Grid container justify={"center"}>
            <Grid item xs={12}>
                <Game/>
            </Grid>
        </Grid>
    );
}

export default App;
