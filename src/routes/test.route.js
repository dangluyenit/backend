'use strict';

const router = require('express').Router();
const TestController = require('../controllers/test.controller');

router.post('/', TestController.create);

module.exports = router;
