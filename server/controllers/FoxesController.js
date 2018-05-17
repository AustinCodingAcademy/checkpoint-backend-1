
const fetch = require("node-fetch");


module.exports.list = function list(request, response) {
  fetch("https://randomfox.ca/floof/").then(res => res.json()).then(json => {
    response.json(json.image);
  });

};








