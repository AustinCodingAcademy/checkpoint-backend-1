const Message = require("../model/Message");

module.exports.list = function (request, response) {
  Message.find({})
    .exec()
    .then((messages) => {
      return response.json(messages);
    });
};

module.exports.show = function (request, response) {
  Message.findById({
    id: request.params.id,
  })
    .exec()
    .then((message) => {
      return response.json(message);
    });
};

module.exports.create = function (request, response) {
  const body = request.body;
  console.log(body);
  const newTask = new Message({
    id: body.id || new Date().getMilliseconds(),
    name: body.name,
    date: body.date,
    message: body.message
  });
  newTask.save().then((message) => {
    return response.json(message);
  });
};
