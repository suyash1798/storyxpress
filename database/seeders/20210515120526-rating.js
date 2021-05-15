'use strict';

const { getCSVData } = require("../../shared/utils/csv-parser");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const results = await getCSVData('ratings',['userId','movieId','rating','timestamp']);
    const ratings = [];
    for(let result of results) {
      const rating = {movieId:result.movieId, rating:result.rating};
      ratings.push(rating)
    }
    try{await queryInterface.bulkInsert('ratings',ratings)}catch(err){console.log(err)}
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ratings');
  }
};
