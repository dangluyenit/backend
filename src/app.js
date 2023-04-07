'use strict';

const express = require('express');
require('dotenv').config();

const app = express();

// connect to database
require('./config/mssql.config');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
