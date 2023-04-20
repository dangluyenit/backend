'use strict';

const router = require('express').Router();
const ScoreController = require('../controllers/score.controller');

router.post('/', ScoreController.create);

module.exports = router;
