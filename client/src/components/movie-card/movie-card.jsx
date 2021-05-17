import React from "react";
import Rating from "@material-ui/lab/Rating";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  IconButton,
} from "@material-ui/core";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import * as MoviesService from "../../services/movies";

function MovieCardComponent({ movie, onUpdate }) {
  const onClickWatchLater = async () => {
    
    await MoviesService.updateMovies(movie.id, !movie.isWatchLater);
    onUpdate({...movie,isWatchLater:!movie.isWatchLater});
  };

  return (
    <Card key={movie.id}>
      <CardContent>
        <Grid container direction="column">
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Grid container direction="row">
                  <Grid item xl={10}>
                    <Typography variant="h6" component="h6" gutterBottom>
                      {movie.title}
                    </Typography>
                  </Grid>
                  <Grid item xl={2}>
                    <IconButton
                      color={movie.isWatchLater ? "primary" : "default"}
                      onClick={onClickWatchLater}
                    >
                      <WatchLaterIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item>
                  <Grid container direction="row" spacing={1}>
                    <Grid item xl={1.5}>
                      <Typography variant="subtitle1" gutterBottom>
                        {movie.year}
                      </Typography>
                    </Grid>
                    <Grid item xl={0.5}>
                      <Typography variant="subtitle1" gutterBottom>
                        &#9679;
                      </Typography>
                    </Grid>
                    <Grid item xl={9}>
                      <Grid container direction="row" spacing={1}>
                        {movie.genres.map((genre) => (
                          <Grid item>
                            <Typography variant="body2" gutterBottom>
                              {genre.genre}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="row" spacing={1}>
                  <Grid item>
                    <Typography variant="subtitle1" gutterBottom>
                      Rating:
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Rating
                      name="read-only"
                      value={parseFloat(movie.rating)}
                      readOnly
                      precision={0.5}
                    />
                  </Grid>
                </Grid>
                <Grid container direction="row" spacing={1}>
                  <Grid item>
                    <Typography variant="subtitle1" gutterBottom>
                      Tags:
                    </Typography>
                  </Grid>
                  {movie.tags.map((tag) => (
                    <Grid item>
                      <Chip label={tag.tag} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default MovieCardComponent;
