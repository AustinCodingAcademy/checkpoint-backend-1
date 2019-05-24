const express = require('express');
const router = express.Router();
const { list, show, create } = require('../controllers/task-controller');

router.get( '/tasks', list );
router.get( '/tasks/:id', show );
router.post('/tasks', create);

module.exports = router;