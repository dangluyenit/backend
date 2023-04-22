'use strict';

const router = require('express').Router();
const courseController = require('../controllers/course.controller');

router.post('/', courseController.create);
router.get('/', courseController.findAll);
router.get('/:id', courseController.findOne);
router.delete('/:id', courseController.delete);
router.put('/:id', courseController.update);

module.exports = router;
