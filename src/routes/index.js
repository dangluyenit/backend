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
  checkPermission(ROLE.ADMIN, ROLE.TEACHER),
  require('./bank-question.route')
);
router.use(API_PREFIX + '/questions', require('./question.route'));
router.use(
  API_PREFIX + '/question-answers',
  require('./question-answer.route')
);
router.use(
  API_PREFIX + '/student-question-answers',
  require('./student-question-answer.route')
);
router.use(API_PREFIX + '/test-questions', require('./test-question.route'));

module.exports = router;
