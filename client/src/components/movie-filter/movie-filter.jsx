import { Button, Grid, TextField } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React, {  useState } from "react";

function MovieFilterComponent({onSearch}) {
  const [search, setSearch] = useState(null);
  const [tag, setTag] = useState(null);
  const [genre, setGenre] = useState(null);
  const [rating, setRating] = useState(null);
  const [yearlte, setYearlte] = useState(null);
  const [yeargte, setYeargte] = useState(null);

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    if (name === "search") {
      setSearch(value);
    } else if (name === "tag") {
      setTag(value);
    } else if (name === "genre"){
      setGenre(value);
    } else if(name === "yearlte"){
      setYearlte(value);
    } else if(name === "rating"){
      setRating(value);
    } else if(name === "yeargte"){
      setYeargte(value);
    }
  };
  
  const onSubmit = () =>{
    const filters = {
      search,
      tag,
      genre,
      year:{
        lte:yearlte,
        gte:yeargte
      },
      rating
    }
    onSearch(filters);
  }

  return (
    <Grid
      container
      direction="row"
      spacing={4}
      justify="flex-start"
      alignItems="center"
    >
      {/* <form> */}
      <Grid item xl={3} xs={12}>
        <TextField
          label="Enter Name"
          variant="outlined"
          name="search"
          onChange={onHandleChange}
        />
      </Grid>
      <Grid item xl={3} xs={12}>
        <TextField id="outlined-basic"
          label="Enter Tag"
          variant="outlined"
          name="tag"
          onChange={onHandleChange}/>
      </Grid>
      <Grid item xl={3} xs={12}>
        <TextField 
          label="Enter Genre"
          variant="outlined"
          name="genre"
          onChange={onHandleChange} />
      </Grid>
      <Grid item xl={3} xs={12}>
        <TextField 
          label="Enter year From"
          variant="outlined"
          name="yeargte"
          type="number"
          onChange={onHandleChange}/>
      </Grid>
      <Grid item xl={3} xs={12}>
        <TextField 
          label="Enter year To"
          variant="outlined"
          name="yearlte"
          type="number"
          onChange={onHandleChange}/>
      </Grid>
      <Grid item xl={3} xs={12}>
        <Rating 
          name="rating"
          onChange={onHandleChange} 
          precision={0.5}/>
      </Grid>
      <Grid item xl={3} xs={12}>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Search
        </Button>
      </Grid>
      {/* </form> */}
    </Grid>
  );
}

export default MovieFilterComponent;
