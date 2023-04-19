'use strict';

const router = require('express').Router();
const { API_PREFIX, ROLE } = require('./../constants/common.constant');
const {
  authentication,
  checkPermission,
} = require('../middlewares/auth.middleware');

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
router.use(API_PREFIX + '/auth/admin', require('./auth-admin.route'));
router.use(
  API_PREFIX + '/bank-questions',
  authentication,
  checkPermission(ROLE.ADMIN),
  require('./bank-question.route')
);
router.use(API_PREFIX + '/questions', require('./question.route'));

module.exports = router;
