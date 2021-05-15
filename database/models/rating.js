'use strict';
const {
  Model,DataTypes
} = require('sequelize');


class Rating extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
  }
};
Rating.init({
  id: {type:DataTypes.INTEGER,primaryKey:true},
  movieId: DataTypes.INTEGER,
  rating: DataTypes.DECIMAL,
}, {
  sequelize,
  modelName: 'Rating',
  tableName: "ratings",
  timestamps: false
});

module.exports = Rating;