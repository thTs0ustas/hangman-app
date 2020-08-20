import React from "react";
import {Buttons} from "../button/Button";
import "./words.css";
import {Grid} from "@material-ui/core";

const letters = "abcdefghijklmnopqrstuvxwyz".split("");


export const Words = ({
                          wrongTries,
                          guess,
                          gaps,
                          word,
                          status,
                          setStart,
                          setRestart,
                          letterMap
                      }) => {


    return (
        <Grid  container  className="gameContainer">
            <div className="stringsThatShowsStaff">
                <h4>{`Status: ${status || "Loading...."}`}</h4>
                <p>{`Number of wrong tries: ${wrongTries || 0}`}</p>
                <p>{`Your Guesses: ${`${guess} `}`}</p>
                <h4>{`Word: ${gaps}`}</h4>
            </div>
            <Grid xs={10} container item>
                {letterMap(letters)}
            </Grid>
            <Grid container item>
                <Grid item sm={6}>
                    <Buttons value={'Start'} disabled={word} onClick={setStart}/>
                </Grid>
                <Grid item sm={6}>
                    <Buttons value={'Restart'} disabled={!word} onClick={setRestart}/>
                </Grid>
            </Grid>
        </Grid>
    );
};


