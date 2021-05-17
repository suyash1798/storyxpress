const Joi = require("joi");

const getMoviesQueryValidations = Joi.object({
  page: Joi.object({ eq: Joi.number().integer().required() }).required(),
  isWatchLater: Joi.object({ eq: Joi.boolean().required() }).optional(),
  search: Joi.object({eq:Joi.string().required()}).optional(),
  tag: Joi.object({eq:Joi.string().required()}).optional(),
  genre: Joi.object({eq:Joi.string().required()}).optional(),
  year: Joi.object({gte:Joi.number().optional(),lte:Joi.number().optional()}).optional(),
  rating: Joi.object({eq:Joi.string().required()}).optional(),
});

const updateMovieBodyValidations = Joi.object({
  isWatchLater: Joi.boolean().required(),
});

const idValidations = Joi.object({
    id: Joi.number().integer().required()
})

module.exports = { getMoviesQueryValidations, updateMovieBodyValidations, idValidations };
