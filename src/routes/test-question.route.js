'use strict';

const router = require('express').Router();
const testQuestionController = require('../controllers/test-question.controller');

router.post('/', testQuestionController.create);
router.get('/:id', testQuestionController.findOne);
router.get('/', testQuestionController.findAll);

module.exports = router;
