const fetch = require('node-fetch');

module.exports.show = function(request, response) {
  fetch('https://randomfox.ca/floof/')
    .then((res) => res.json())
    .then((json) => response.json(json.image));
};
