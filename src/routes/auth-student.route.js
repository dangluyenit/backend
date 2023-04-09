'use strict';

const express = require('express');
const authStudentController = require('./../controllers/auth-student.controller');
const router = express.Router();

router.post('/sign-up', authStudentController.signUp);

module.exports = router;
