'use strict';

const router = require('express').Router();
const lessonController = require('../controllers/lesson.controller');

router.post('/', lessonController.create);
router.get('/courses/:id', lessonController.findByIdCourse);
router.get('/:id', lessonController.findOne);
router.get('/', lessonController.findAll);
router.put('/:id', lessonController.update);
router.delete('/:id', lessonController.delete);

module.exports = router;
