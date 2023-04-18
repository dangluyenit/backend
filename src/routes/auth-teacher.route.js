'use strict';

const express = require('express');
const authTeacherController = require('../controllers/auth-teacher.controller');

const router = express.Router();

router.post('/sign-up', authTeacherController.signUp);
router.post('/sign-in', authTeacherController.signIn);
router.get('/refresh-token', authTeacherController.refreshToken);

module.exports = router;
