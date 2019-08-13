const express = require('express');
const router = express.Router();
const {list, show, create} = require('../controllers/tasks');

router.get('/tasks', list);