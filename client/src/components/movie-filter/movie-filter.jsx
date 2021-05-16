import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";

function MovieFilterComponent() {
  return (
    <Grid container direction="row" spacing={4} justify="flex-start" alignItems="center">
      <Grid item xl={3} xs={12}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid>
      <Grid item xl={3} xs={12}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid>
      <Grid item xl={3} xs={12}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid>
      <Grid item xl={3} xs={12}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid>
      <Grid item xl={3} xs={12}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid>
      <Grid item xl={3} xs={12}>
        <Button variant="contained" color="primary">Search</Button>
      </Grid>  
    </Grid>
  );
}

export default MovieFilterComponent;
