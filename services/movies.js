const Movie = require('../database/models/movie');

const getMovies = () => {
    console.log(Movie)
    return Movie.findAll({include:['tags']});
}

module.exports = { getMovies }