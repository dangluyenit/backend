'use strict';

const router = require('express').Router();
const studentQuestionAnswerController = require('../controllers/student-question-answer.controller');

router.post('/', studentQuestionAnswerController.create);
router.get('/:id', studentQuestionAnswerController.findOne);
router.get('/', studentQuestionAnswerController.findAll);

module.exports = router;
