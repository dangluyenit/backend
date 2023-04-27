'use strict';

const router = require('express').Router();
const lessonController = require('../controllers/lesson.controller');

router.post('/', lessonController.create);
router.get('/:id', lessonController.findOne);
router.get('/', lessonController.findAll);

module.exports = router;
