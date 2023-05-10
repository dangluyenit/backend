'use strict';

const router = require('express').Router();
const teacherController = require('../controllers/teacher.controller');

router.get('/:teacherCode', teacherController.findOne);
router.get('/', teacherController.findAll);
router.delete('/:teacherCode', teacherController.delete);
router.put('/:teacherCode', teacherController.update);

module.exports = router;
