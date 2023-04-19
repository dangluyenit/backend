'use strict';

const router = require('express').Router();
const questionController = require('../controllers/question.controller');

router.post('/', questionController.create);

module.exports = router;
