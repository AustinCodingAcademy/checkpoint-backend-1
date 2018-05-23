let fetch = require('node-fetch');

module.exports.list = function list(req, res) {
    fetch("https://randomfox.ca/floof/").then(res=>res.json()).then(d=>res.json(d.image)); 
};
// module.exports.show = function show(req, res) {
//     fetch("https://randomfox.ca/floof/").then(r=>r.json()).then(d=>{
//         console.log(d.image)
//         res.json(d.image)
//     }); 
// };
// module.exports.create = function create(req, res) {
//   const newOrder = new OrderModel(req.body);
//   newOrder.save().then(savedOrder => res.json(savedOrder));
// };
// module.exports.update = function update(request, response) {
//   return response.json({theId: request.params.id});
// }
// module.exports.remove = function remove(request, response) {
//   return response.json({});
// }