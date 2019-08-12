const express = require("express");
const router = express.Router();
let {list, create} = require('../controllers/tasks.js')

router.get('/', list)

router.post('/', create)

module.exports = router