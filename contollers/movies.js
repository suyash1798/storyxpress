const movieService= require('../services/movies')
const httpStatus = require('http-status-codes');
const Tag = require('../database/models/tag');

const getMovies = async (req,res,next) => {
    const {page,isWatchLater,search,tag,genre,year,rating} = req.query;
    const response = await movieService.getMovies(page,isWatchLater,search,tag,genre,year,rating);   
    
    res.status(httpStatus.StatusCodes.OK).send(response);
}

const updateMovie = async (req,res,next) => {
    const {isWatchLater} = req.body;
    const {id} = req.params;
    const response = await movieService.updateMovie(id,isWatchLater);
    res.status(httpStatus.StatusCodes.CREATED).send(response);
}

module.exports = { getMovies, updateMovie }