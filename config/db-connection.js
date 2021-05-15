const { Sequelize } = require("sequelize");
const path = require("path");
const fs = require("fs");

const sequelize = new Sequelize("postgres", "postgres", "suyash", {
  host: "localhost",
  dialect: "postgres",
  port: 5444
});

const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("DATABASE CONNECTED");
  } catch (err) {
    console.log("DATABASE NOT CONNECTED",err.message);   
  }
};

// const bindAndInitializeModels = (sequelize,DataTypes) => {
//   const db = {};
//   fs
//   .readdirSync(path.resolve(__dirname,'../database/models/'))
//   .forEach(file => {
//     var model = require(path.join(__dirname, `../database/models/${file}`))(sequelize,DataTypes);
//     console.log(model.name)
//     db[model.name] = model;
//   });

//   Object.keys(db).forEach(modelName => {
//     if (db[modelName].associate) {
//       db[modelName].associate(db);
//     }
//   });
  
//   return db;
// }

checkConnection();

// const db = bindAndInitializeModels(sequelize,DataTypes);

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = sequelize;
global.sequelize = sequelize;