const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();

 let fox;

 fetch('https://randomfox.ca/floof/') 
    .then(res => res.json())
    .then(data => fox = data)
    .catch(err => console.log(`Error: ${err}`))

 router.get('/foxes', (req, res) => {
    res.json(fox.image);
});

 module.exports = router;