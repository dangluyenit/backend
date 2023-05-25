'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// static file
app.use(express.static('upload'));

// connect to database
require('./config/mssql.config');

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// routes
app.use('/', require('./routes'));

module.exports = app;
