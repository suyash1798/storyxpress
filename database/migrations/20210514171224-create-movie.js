"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("movies", {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      isWatchLater: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      rating:{
        type: Sequelize.DECIMAL,
        allowNull: true,
        defaultValue: 0,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("movies");
  },
};
