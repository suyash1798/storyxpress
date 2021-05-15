import { Container, Grid } from "@material-ui/core";
import MovieFilterComponent from "components/movie-filter/movie-filter";
import React, { useEffect, useState } from "react";
import "./movies.css";
import * as MoviesService from "../../services/movies";
import MovieCardComponent from "components/movie-card/movie-card";

function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  },[]);

  const getMovies = async () => {
    const movies = await MoviesService.getFilteredMovies();
    setMovies(movies);
  };

  return (
    <Container>
      <Grid container direction="column" className="main-grid">
        <Grid item>
          <MovieFilterComponent />
        </Grid>
        <Grid item>
          <Grid container direction="row" spacing={2} lg={12}>
            {movies.map((movie) => (
              <Grid item lg={4}>
                <MovieCardComponent movie={movie} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MoviesPage;
