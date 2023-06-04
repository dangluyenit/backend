'use strict';

const router = require('express').Router();
const joinCourseController = require('../controllers/join-course.controller');

router.post('/', joinCourseController.create);
router.get('/', joinCourseController.findAll);
router.get('/:id', joinCourseController.findOne);
router.get('/courses/:id', joinCourseController.findByIdCourse);

module.exports = router;
