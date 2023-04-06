'use strict';

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: 'mssql',
  logging: true,
});

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((error) =>
    console.error('Unable to connect to the database: ', error)
  );
