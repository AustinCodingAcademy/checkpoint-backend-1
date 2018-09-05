const fetch = require ('node-fetch')
module.exports.list = function list (req,res,next){

fetch ('https//randomfox.ca/floof')
.then(res=> res.json())
.then(json => {
    console.log (json);
});
}