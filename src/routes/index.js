'use strict';

const router = require('express').Router();
const { API_PREFIX } = require('./../constants/common.constant');

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
router.use(API_PREFIX + '/auth/teacher', require('./auth-teacher.route'));

module.exports = router;
