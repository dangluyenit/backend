'use strict';

const router = require('express').Router();
const studentController = require('../controllers/student.controller');

router.get('/:studentCode', studentController.findOne);
router.get('/', studentController.findAll);
router.delete('/:studentCode', studentController.delete);
router.put('/:studentCode', studentController.update);

module.exports = router;
