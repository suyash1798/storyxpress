const Movie = require("../database/models/movie");
const sequelize = require("sequelize");

const getMovies = async (page) => {
  console.log(Movie);
  const countQuery = `(SELECT ROUND(AVG(rating),2) FROM "ratings" AS "ratings" where "ratings"."movieId" = "Movie"."id")`;
  const movies = await Movie.findAll({
    attributes: { include: [[sequelize.literal(countQuery), "rating"]] },
    include: ["tags", "genres"],
    limit: 20,
    offset: (page.eq - 1) * 20
  });
  const total = await Movie.count();
  
  return { movies: movies, total: total };
};

const updateMovie = async (id, isWatchLater) => {
  const movie = await Movie.findOne({ where: { id } });

  if (!movie) {
    throw new Error("Movie not found");
  }

  return Movie.update({ isWatchLater },{where:{id}});
};

module.exports = { getMovies, updateMovie };
