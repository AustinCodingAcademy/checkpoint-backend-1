`use strict`

const express = require('express');
let router = express.Router();
let { list, create } = require('../controllers/messages');

router.get('/messages', list);
router.post('/messages', create)


module.exports = router