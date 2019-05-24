const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();

let show = (req, res) => {
    fetch('https://randomfox.ca/floof')
            .then( res => res.json() )
            .then( fox => {
                return res.json(fox.image);
            })
}

router.get('/foxes', show);

module.exports = router;