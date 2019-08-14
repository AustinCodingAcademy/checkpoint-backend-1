`use strict`

const express = require('express');
let router = express.Router();
let { list, create } = require('../controllers/tasks');

router.get('/tasks', list);
router.post('/tasks', create)


module.exports = router