const express = require("express");
const router = express.Router();
let {getFox} = require('../controllers/fox.js')

router.get('/', getFox);

module.exports = router