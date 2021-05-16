const Joi = require("joi");

const getMoviesQueryValidations = Joi.object({
  page: Joi.object({ eq: Joi.number().integer().required() }).required(),
});

const updateMovieBodyValidations = Joi.object({
  isWatchLater: Joi.boolean().required(),
});

const idValidations = Joi.object({
    id: Joi.number().integer().required()
})

module.exports = { getMoviesQueryValidations, updateMovieBodyValidations, idValidations };
