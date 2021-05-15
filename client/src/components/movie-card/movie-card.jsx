const { Grid, Typography, Card, CardContent } = require("@material-ui/core");
const { default: React } = require("react");

function MovieCardComponent({ movie }) {
  return (
    <Card>
      <CardContent>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h6" component="h6" gutterBottom>
              {movie.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {movie.year}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default MovieCardComponent;
