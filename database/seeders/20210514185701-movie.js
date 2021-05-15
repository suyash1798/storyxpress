"use strict";

const { getCSVData } = require("../../shared/utils/csv-parser");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const results = await getCSVData('movies',['movieId','title','genres']);
    const movies = [], genres = [];
    for(let result of results){
      const titleLen = result.title.length;
      const year = parseInt(result.title.substring(titleLen - 5,result.title.length-1));
      const title = result.title.substring(0,titleLen - 7)
      const movie = {id:result.movieId,title,...(!isNaN(year) && {year})};
      for (let genre of result.genres.split('|')){
        const temp = {movieId:result.movieId,genre}
        genres.push(temp); 
      }
      movies.push(movie);
    }
    await queryInterface.bulkInsert('movies',movies);
    await queryInterface.bulkInsert('genres',genres);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('genres');
    await queryInterface.bulkDelete('movies');
  },
};


