'use strict';

const router = require('express').Router();
const bankQuestionController = require('../controllers/bank-question.controller');

router.post('/', bankQuestionController.create);

module.exports = router;
