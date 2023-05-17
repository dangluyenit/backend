'use strict';

const router = require('express').Router();
const questionController = require('../controllers/question.controller');

router.post('/', questionController.create);
router.get('/bank-questions/:id', questionController.findByIdBankQuestion);
router.get('/:id', questionController.findOne);
router.get('/', questionController.findAll);
router.put('/:id', questionController.update);
router.delete('/:id', questionController.delete);

module.exports = router;
