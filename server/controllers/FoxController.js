const fetch = require('node-fetch');


exports.list = function list(request, response) {  
  fetch('https://randomfox.ca/floof/')
    .then(res => res.text())
    .then(body => {
      return response.json(JSON.parse(body).image)
    });
    
}
