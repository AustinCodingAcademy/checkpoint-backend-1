const fetch = require('node-fetch');
const foxApi = "https://randomfox.ca/floof/";

exports.show = function list(request, response) {

    fetch(foxApi)
        .then(res => res.json())
        .then(json => response.json(json["image"]));
}
