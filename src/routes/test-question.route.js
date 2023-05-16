'use strict';

const router = require('express').Router();
const testQuestionController = require('../controllers/test-question.controller');

router.post('/', testQuestionController.create);
router.get('/tests/:id', testQuestionController.findByIdTest);
router.get('/:id', testQuestionController.findOne);
router.get('/', testQuestionController.findAll);

module.exports = router;
