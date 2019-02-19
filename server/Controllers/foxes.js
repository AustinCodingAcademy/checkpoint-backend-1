// ### node-fetch
// * The ceo likes to look at pictures of foxes while reading business reports
// * install node-fetch
// * make a route for /foxes
// * make a http get call to https://randomfox.ca/floof/
// * send back the image value

const fetch = require('node-fetch');


exports.show = function show(request, response) {
    fetch("https://randomfox.ca/floof/")
      .then((response) => response.json())
      .then((data) => response.json(data.image));
}