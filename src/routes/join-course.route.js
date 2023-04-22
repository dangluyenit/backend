'use strict';

const router = require('express').Router();
const joinCourseController = require('../controllers/join-course.controller');

router.post('/', joinCourseController.create);
router.get('/', joinCourseController.findAll);
router.get('/:id', joinCourseController.findOne);

module.exports = router;
