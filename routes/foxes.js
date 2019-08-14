`use strict`

const express = require('express');
let router = express.Router();
const fetch = require('node-fetch')


router.get('/foxes', (req,res)=>{
    fetch('https://randomfox.ca/floof/')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        res.json(data.image)
    });
})

module.exports = router
