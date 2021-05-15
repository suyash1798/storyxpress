const movieService= require('../services/movies')
const httpStatus = require('http-status-codes');

const getMovies = async (req,res,next) => {
    const response = await movieService.getMovies();    
    
    res.status(httpStatus.StatusCodes.OK).send(response);
}

module.exports = { getMovies }