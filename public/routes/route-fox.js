const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

list = function list(req, res){
    fetch('https://randomfox.ca/floof/')
    .then(res=>res.json())
    .then((json)=>{return res.json(json.image)})
}

router.get('/foxes', list);

module.exports = router;