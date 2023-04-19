'use strict';

const router = require('express').Router();
const authStudentController = require('./../controllers/auth-student.controller');

router.post('/sign-up', authStudentController.signUp);
router.post('/sign-in', authStudentController.signIn);
router.get('/refresh-token', authStudentController.refreshToken);

module.exports = router;
