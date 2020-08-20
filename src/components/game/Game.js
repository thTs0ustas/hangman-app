import React from "react";
import Words from "../words";
import {Grid} from "@material-ui/core";

export const Game = () => {
  return (
      <Grid container >
          <Grid item xs={12}>
              <Words/>
          </Grid>
      </Grid>
  );
};
