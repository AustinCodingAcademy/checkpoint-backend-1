const express = require("express");
const router = express.Router();
let {list, create} = require('../controllers/messages.js')

router.get('/', list)

router.post('/', create)

module.exports = router