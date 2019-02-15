const fetch = require("node-fetch");

module.exports.show = function(request, response) {
    fetch("https://randomfox.ca/floof/")
      .then((response) => response.json())
      .then((data) => response.json(data.image));
};