const express = require('express');
const router = express.Router();
const {list, show, create} = require('../controllers/orders');

router.get('/orders', list);