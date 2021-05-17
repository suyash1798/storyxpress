const Movie = require("../database/models/movie");
const sequelize = require("sequelize");
const Tag = require("../database/models/tag");
const Genre = require("../database/models/genres");

const getMovies = async (
  page,
  isWatchLater,
  search,
  tag,
  genre,
  year,
  rating
) => {
  const where = {
    ...(isWatchLater && { isWatchLater: isWatchLater.eq }),
    ...(search && { title: { [sequelize.Op.iLike]: `${search.eq}%` } }),
    ...(tag && { "$tags.tag$": { [sequelize.Op.iLike]: `${tag.eq}%` } }),
    ...(genre && {
      "$genres.genre$": { [sequelize.Op.iLike]: `${genre.eq}%` },
    }),
    ...(year && {
      year: {
        ...(year.lte && { [sequelize.Op.lte]: year.lte }),
        ...(year.gte && { [sequelize.Op.gte]: year.gte }),
      },
    }),
    ...(rating && {
      rating: {
        [sequelize.Op.lte]: parseFloat(rating.eq) + 0.5,
        [sequelize.Op.gt]: parseFloat(rating.eq) - 0.5,
      },
    }),
  };
  const movies = await Movie.findAll({
    where,
    attributes: [
      sequelize.literal('DISTINCT ON("Movie".id) "Movie".id'),
      "id",
      "title",
      "year",
      "isWatchLater",
      "rating",
    ],
    include: ["tags", "genres"],
    limit: 20,
    offset: (page.eq - 1) * 20,
    subQuery: false,
  });

  const count = await Movie.count({
    where,
    include: ["tags", "genres"],
    distinct:true,
  });
  return { movies: movies, total: count };
};

const updateMovie = async (id, isWatchLater) => {
  const movie = await Movie.findOne({ where: { id } });

  if (!movie) {
    throw new Error("Movie not found");
  }

  return Movie.update({ isWatchLater }, { where: { id } });
};

module.exports = { getMovies, updateMovie };
