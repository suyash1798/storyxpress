'use strict';
const {
  Model, DataTypes
} = require('sequelize');

class Genre extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    this.hasOne(models.Movie)
  }
};
Genre.init({
  id: {type:DataTypes.INTEGER,primaryKey:true},
  movieId: DataTypes.INTEGER,
  genre: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'Genre',
  tableName:'genres',
  timestamps: false
});

module.exports = Genre;