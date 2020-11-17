import React, {Suspense} from "react";

import {Grid} from "@material-ui/core";
const Words = React.lazy(()=>import("../words"))
export const Game = () => {
  return (
      <Grid container >
          <Grid item xs={12}>
            <Suspense fallback={<div>Loading word....</div>}>
              <Words/>
            </Suspense>
          </Grid>
      </Grid>
  );
};
