var express = require("express");
var router = express.Router();
const movieController = require("../contollers/movies");
const {
  getMoviesQueryValidations,
  updateMovieBodyValidations,
  idValidations
} = require("../validations/movies");
const validator = require("express-joi-validation").createValidator({});

router.get(
  "/",
  validator.query(getMoviesQueryValidations),
  movieController.getMovies
);

router.put(
  "/:id",
  validator.params(idValidations),
  validator.body(updateMovieBodyValidations),
  movieController.updateMovie
);

module.exports = router;
