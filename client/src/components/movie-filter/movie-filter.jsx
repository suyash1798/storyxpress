import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";

function MovieFilterComponent() {
  return (
    <Grid container direction="row" spacing={4} justify="flex-start" alignItems="center">
      <Grid item>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid>
      <Grid item>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid>
      <Grid item>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid>
      <Grid item>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid>
      <Grid item>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary">Search</Button>
      </Grid>  
    </Grid>
  );
}

export default MovieFilterComponent;
