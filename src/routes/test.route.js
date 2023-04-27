'use strict';

const router = require('express').Router();
const testController = require('../controllers/test.controller');

router.post('/', testController.create);
router.get('/:id', testController.findOne);
router.get('/', testController.findAll);
router.put('/:id', testController.update);
router.delete('/:id', testController.delete);

module.exports = router;
