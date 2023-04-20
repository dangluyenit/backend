'use strict';

const router = require('express').Router();
const CourseController = require('../controllers/course.controller');

router.post('/', CourseController.create);

module.exports = router;
