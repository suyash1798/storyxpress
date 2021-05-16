const { Model,DataTypes } = require("sequelize");
const Genre = require("./genres");
const Rating = require("./rating");
const Tag = require("./tag");

class Movie extends Model {
};

Movie.init({
  id: {type:DataTypes.INTEGER,primaryKey:true},
  title: DataTypes.STRING,
  year: DataTypes.INTEGER,
  isWatchLater: DataTypes.BOOLEAN,
}, {
  sequelize,
  modelName: "Movie",
  tableName: "movies",
  timestamps: false
});

Movie.hasMany(Genre,{as:'genres',foreignKey:'movieId'});
Movie.hasMany(Rating,{as:'ratings',foreignKey:'movieId'});
Movie.hasMany(Tag,{as:'tags',foreignKey:'movieId'})

module.exports = Movie;

