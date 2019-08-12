const fetch = require('node-fetch');

exports.getFox =  function getFox(req, res) {
    fetch('https://randomfox.ca/floof/')
        .then(res => res.json())
        .then(data =>res.json(data.image))
}