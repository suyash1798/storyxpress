import { Button, Container, Grid } from "@material-ui/core";
import MovieFilterComponent from "components/movie-filter/movie-filter";
import React, { useEffect, useState } from "react";
import "./movies.css";
import * as MoviesService from "../../services/movies";
import MovieCardComponent from "components/movie-card/movie-card";
import { Pagination } from "@material-ui/lab";

function MoviesPage(props) {
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isWishlist,setIsWishlist] = useState(false);
  const [filters,setFilters] = useState({})
  

  const onChangePage = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    const getMovies = async () => {
      const { movies, total } = await MoviesService.getFilteredMovies(
        currentPage,
        isWishlist,
        filters
      );
      setMovies(movies);
      setTotal(total);
      getPages();
    };
    
    const getPages = () => {
      let pages = Math.floor(total / 20);
      const remaining = total % 20;
      if (remaining) {
        pages++;
      }
      setPages(pages);
    }
    
    getMovies();
  }, [currentPage, total,isWishlist,filters]);
  
  const onWishlist = ()=>{
    setIsWishlist(!isWishlist);
  }
  
  const onSearch = (data)=>{
    setFilters(data)
    console.log(filters)
  }

  return (
    <div className="main-div">
      <Container>
        <Grid container direction="column" className="main-grid" spacing={1}>
          <Grid item>
            <MovieFilterComponent onSearch={onSearch}/>
          </Grid>
          <Grid item>
            <Grid container direction="row" justify="flex-end">
              <Button variant="contained" color="primary" onClick={onWishlist}>{!isWishlist?'Watch Later':'ALL'}</Button>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row" spacing={2} lg={12}>
              {movies.map((movie,index) => (
                <Grid item lg={4} xs={12}>
                  <MovieCardComponent movie={movie} onUpdate={(newMovie)=>{
                    let newMovies = movies.slice();
                    newMovies[index] = newMovie;
                    setMovies(newMovies);
                  }}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row" spacing={1} justify="center">
              <Grid item>
                <Pagination
                  count={pages}
                  color="primary"
                  size="large"
                  defaultPage={1}
                  boundaryCount={2}
                  onChange={onChangePage}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MoviesPage;
