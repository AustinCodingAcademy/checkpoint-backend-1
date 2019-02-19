const fetch = require('node-fetch');

exports.image = function image(req,res) {
    fetch('https://randomfox.ca/floof/')
        .then(res => res.json())
        .then(data => {
            return res.json(data.image);
        }); 
            
}