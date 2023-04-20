'use strict';

const router = require('express').Router();
const studentQuestionAnswerController = require('../controllers/student-question-answer.controller');

router.post('/', studentQuestionAnswerController.create);

module.exports = router;
