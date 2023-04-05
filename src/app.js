'use strict';

const express = require('express');
require('dotenv').config();

const app = express();

// connect to database
require('./database/mssql.database');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
