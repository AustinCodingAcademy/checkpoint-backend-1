
const fetch = require("node-fetch");


module.exports.list = function list() {
  fetch("https://randomfox.ca/floof/").then(response => response.json()).then(json => {
    console.log(json.image);
    return json.image;
  });
};



// module.exports.list = function list() {
//   fetch("https://randomfox.ca/floof/", 
//     { 
//       method: "GET"
//     })
//   .then(response => response.json()).then(json => {
//     console.log(json.image);
//     return json.image;
//   });
// };





