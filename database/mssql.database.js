'use strict';

const { DataSource } = require('typeorm');

const AppDataSource = new DataSource({
  type: 'mssql',
  host: process.env.DB_HOST,
  port: 1433,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
  options: {
    'encrypt': false
  }
});

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.log('Database connection error: ', error);
  });

module.exports = AppDataSource;
