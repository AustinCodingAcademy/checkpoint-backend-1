

module.exports.list = function list(req, res) {
    const date = new Date()
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };

    return res.json(date.toLocaleTimeString('en-US', options))
  };
//   module.exports.show = function show(req, res) {
//     return OrderModel.findById(req.params.id).exec().then(order => res.json(order)); 
//   };
//   module.exports.create = function create(req, res) {
//     const newOrder = new OrderModel(req.body);
//     newOrder.save().then(savedOrder => res.json(savedOrder));
//   };
  // module.exports.update = function update(request, response) {
  //   return response.json({theId: request.params.id});
  // }
  // module.exports.remove = function remove(request, response) {
  //   return response.json({});
  // }
