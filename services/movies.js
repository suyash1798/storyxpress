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
  console.log(isWatchLater);
  const countQuery = `(SELECT ROUND(AVG(rating),2) as "rating" FROM "ratings" AS "ratings" where "ratings"."movieId" = "Movie"."id")`;

  const moviesWithCount = await Movie.findAndCountAll({
    subQuery: false,
    where: {
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
        [sequelize.Op.and]: [
          sequelize.literal(
            `EXISTS(SELECT * FROM (SELECT ROUND(AVG(rating),2) as "rating" FROM "ratings" AS "ratings" where "ratings"."movieId" = "Movie"."id") as ratings WHERE "ratings"."rating" >= ${parseFloat(
              rating.eq
            )} AND "ratings"."rating" < ${parseFloat(rating.eq) + 0.5})`
          ),
        ],
      }),
    },
    attributes: [
      sequelize.literal('DISTINCT ON("Movie".id) "Movie".id'),
      "id",
      "title",
      "year",
      "isWatchLater",
      [sequelize.literal(countQuery), "rating"],
    ],
    include: ["tags", "genres"],
    limit: 10,
    offset: (page.eq - 1) * 20,
  });

  return { movies: moviesWithCount.rows, total: moviesWithCount.count };
};

const updateMovie = async (id, isWatchLater) => {
  const movie = await Movie.findOne({ where: { id } });

  if (!movie) {
    throw new Error("Movie not found");
  }

  return Movie.update({ isWatchLater }, { where: { id } });
};

module.exports = { getMovies, updateMovie };
