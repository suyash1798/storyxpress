'use strict';
const {
  Model,DataTypes
} = require('sequelize');

class Tag extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
  }
};
Tag.init({
  id: {type:DataTypes.INTEGER,primaryKey:true},
  movieId: DataTypes.STRING,
  tag: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'Tag',
  tableName: 'tags',
  timestamps: false
});

module.exports = Tag;