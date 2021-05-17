"use strict";

const { getCSVData } = require("../../shared/utils/csv-parser");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const results = await getCSVData("ratings", [
      "userId",
      "movieId",
      "rating",
      "timestamp",
    ]);
    const ratings = [];
    for (let result of results) {
      const rating = { movieId: result.movieId, rating: result.rating };
      ratings.push(rating);
    }
    try {
      await queryInterface.bulkInsert("ratings", ratings);
    } catch (err) {
      console.log(err);
    }
    const movies = await queryInterface.sequelize.query('SELECT * FROM movies');

    let promises = [];
    for (let movie of movies[0]) {
      promises.push(
        queryInterface.sequelize.query(
          `UPDATE movies SET rating = (SELECT ROUND(AVG(rating),2) as "rating" FROM "ratings" AS "ratings" where "ratings"."movieId" = ${movie.id}) WHERE id=${movie.id}`
        )
      );
      
      await Promise.all(promises)
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ratings");
  },
};
