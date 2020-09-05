import React from "react";
import {Buttons} from "../button/Button";
import "./words.css";
import {Grid, Card} from "@material-ui/core";
import {useStyles} from "./styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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

   const classes = useStyles();
   return (
     <Card className={classes.root} >
        <CardContent>
           <Typography className={classes.title} variant="h4" >
              {`Status: ${status || "Loading...."}`}
           </Typography>
           <p>{`Number of wrong tries: ${wrongTries || 0}`}</p>
           <p>{`Your Guesses: ${`${guess} `}`}</p>
           <h4>{`Word: ${gaps}`}</h4>
        </CardContent>
        <Grid className={classes.item} xs={10}  container item>
              {letterMap(letters)}
        </Grid>
        <Grid container className={classes.item}>
           <Grid item sm={6}>
              <Buttons value={'Start'} disabled={word} onClick={setStart}/>
           </Grid>
           <Grid item sm={6}>
              <Buttons value={'Restart'} disabled={!word} onClick={setRestart}/>
           </Grid>
        </Grid>
     </Card>
   );
};


