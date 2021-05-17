const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(`${process.env.DATABASE_URL}`, {
  ...(process.env.NODE_ENV === "production" && {
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }),
});
// const sequelize = new Sequelize(`${process.env.DATABASE_URL}`)

const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("DATABASE CONNECTED");
  } catch (err) {
    console.log("DATABASE NOT CONNECTED", err.message);
  }
};

checkConnection();

module.exports = sequelize;
global.sequelize = sequelize;
