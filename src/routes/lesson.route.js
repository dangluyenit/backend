'use strict';

const router = require('express').Router();
const LessonController = require('../controllers/lesson.controller');

router.post('/', LessonController.create);

module.exports = router;
