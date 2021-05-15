"use strict";

const { getCSVData } = require("../../shared/utils/csv-parser");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const results = await getCSVData("tags", [
      "userId",
      "movieId",
      "tag",
      "timestamp",
    ]);
    const tags = [];
    for (let result of results) {
      const tag = { movieId: result.movieId, tag: result.tag };
      tags.push(tag);
    }
    try {
      await queryInterface.bulkInsert("tags", tags);
    } catch (err) {
      console.log('error',error.message);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags");
  },
};
