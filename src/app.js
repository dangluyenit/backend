'use strict';

const express = require('express');
require('dotenv').config();

const app = express();

// connect to database
require('./config/mssql.config');

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/', require('./routes'));

module.exports = app;
