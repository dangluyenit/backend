'use strict';

const router = require('express').Router();
const { upload } = require('../config/disk-storage');
const studentController = require('../controllers/student.controller');

router.get('/:studentCode', studentController.findOne);
router.get('/', studentController.findAll);
router.delete('/:studentCode', studentController.delete);
router.put('/:studentCode', upload.single('image'), studentController.update);

module.exports = router;
