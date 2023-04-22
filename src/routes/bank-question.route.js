'use strict';

const router = require('express').Router();
const bankQuestionController = require('../controllers/bank-question.controller');

router.post('/', bankQuestionController.create);
router.get('/', bankQuestionController.findAll);
router.get('/:id', bankQuestionController.findOne);
router.delete('/:id', bankQuestionController.delete);
router.put('/:id', bankQuestionController.update);

module.exports = router;
