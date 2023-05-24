'use strict';

const router = require('express').Router();
const { upload } = require('../config/disk-storage');
const teacherController = require('../controllers/teacher.controller');

router.get('/:teacherCode', teacherController.findOne);
router.get('/', teacherController.findAll);
router.delete('/:teacherCode', teacherController.delete);
router.put('/:teacherCode', upload.single('image'), teacherController.update);

module.exports = router;
