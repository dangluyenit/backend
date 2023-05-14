'use strict';

const router = require('express').Router();
const courseController = require('../controllers/course.controller');

router.post('/', courseController.create);
router.get('/:id/lessons', courseController.getLessonByIdCourse);
router.get('/:id', courseController.findOne);
router.get('/', courseController.findAll);
router.delete('/:id', courseController.delete);
router.put('/:id', courseController.update);

module.exports = router;
