module.exports = {
  development: {
    username: 'postgres',
    password: 'suyash',
    database: 'postgres',
    host: 'localhost',
    dialect: 'postgres',
    port: 5444,
    logging: true,
  },
  production: {
    username: `${process.env.USERNAME}`,
    password: `${process.env.PASSWORD}`,
    database: `${process.env.DATABASE}`,
    host: `${process.env.HOSTNAME}`,
    dialect: `${process.env.DIALECT}`,
    logging: true,
    ssl: true,
    dialectOptions:{
      ssl: {
        require:true,
        rejectUnauthorized:false
      },
    }
  },
};
