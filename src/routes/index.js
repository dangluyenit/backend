'use strict';

const express = require('express');
const { API_PREFIX } = require('./../constants/common.constant');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World',
  });
});

router.get(API_PREFIX, (req, res) => {
  res.status(200).json({
    message: 'Welcome to API',
  });
});

router.use(API_PREFIX + '/auth/student', require('./auth-student.route'));

module.exports = router;
