const fs = require('fs')
fs.readFile("data.csv", 'utf8', function (err,data) {
 if (err) {
   return console.log(err);
 }
return (data);
});

module.exports.list = function list(request, response) {
  comment.find({}).exec()
  .then(comments => {
    response.json(comments);
  });
};

module.exports.show = function show(request, response) {
  comment.findById(request.params.id).exec()
  .then(comments => {
    response.json(comments);
  });
};

module.exports.create = function create(request, response) {
  const newComment = new comment(request.body);
  newComment.save()
  .then(savedComment => {
    response.json(savedComment);
  });
};