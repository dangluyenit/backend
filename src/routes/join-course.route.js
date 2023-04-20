'use strict';

const router = require('express').Router();
const JoinCourseController = require('../controllers/join-course.controller');

router.post('/', JoinCourseController.create);

module.exports = router;
