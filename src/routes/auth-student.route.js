'use strict';

const express = require('express');
const authStudentController = require('./../controllers/auth-student.controller');

const router = express.Router();

router.post('/sign-up', authStudentController.signUp);
router.post('/sign-in', authStudentController.signIn);
router.get('/refresh-token', authStudentController.refreshToken);

module.exports = router;
