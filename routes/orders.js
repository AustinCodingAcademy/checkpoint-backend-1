`use strict`

const express = require('express');
let router = express.Router();
let { list, create } = require('../controllers/orders');

router.get('/orders', list);
router.post('/orders', create)


module.exports = router