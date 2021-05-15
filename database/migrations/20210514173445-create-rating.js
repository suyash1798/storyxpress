'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ratings', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      movieId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'movies',
          key:'id'
        }
      },
      rating: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ratings');
  }
};