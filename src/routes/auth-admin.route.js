'use strict';

const router = require('express').Router();
const authAdminController = require('./../controllers/auth-admin.controller');

router.post('/sign-up', authAdminController.signUp);
router.post('/sign-in', authAdminController.signIn);
router.get('/refresh-token', authAdminController.refreshToken);

module.exports = router;
