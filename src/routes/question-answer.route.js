'use strict';

const router = require('express').Router();
const questionAnswerController = require('../controllers/question-answer.controller');

router.post('/', questionAnswerController.create);

module.exports = router;
