const express = require('express');
const router = express.Router();
const {list, show, create} = require('../Controllers/taksController');

router.get('/tasks', list);
router.get('/tasks/id', show);
router.get('/tasks', create);

module.exports = router;
