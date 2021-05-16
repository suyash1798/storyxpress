const movieService= require('../services/movies')
const httpStatus = require('http-status-codes');

const getMovies = async (req,res,next) => {
    const {page} = req.query;
    const response = await movieService.getMovies(page);   
    console.log(response) 
    
    res.status(httpStatus.StatusCodes.OK).send(response);
}

const updateMovie = async (req,res,next) => {
    console.log(req.body,req.params,req.query);
    const {isWatchLater} = req.body;
    const {id} = req.params;
    console.log(req.body)
    const response = await movieService.updateMovie(id,isWatchLater);
    res.status(httpStatus.StatusCodes.CREATED).send(response);
}

module.exports = { getMovies, updateMovie }