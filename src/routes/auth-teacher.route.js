'use strict';

const router = require('express').Router();
const authTeacherController = require('../controllers/auth-teacher.controller');

router.post('/sign-up', authTeacherController.signUp);
router.post('/sign-in', authTeacherController.signIn);
router.get('/refresh-token', authTeacherController.refreshToken);

module.exports = router;
