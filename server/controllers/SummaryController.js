const fs = require('fs');
const data = loadCsv();

module.exports.dateTime = function(request, response) {
  return response.send(new Date());
};

module.exports.newComments = function(request, response) {
  return response.send(data["new_comments"]);
};

module.exports.newTasks = function(request, response) {
  return response.send(data["new_tasks"]);
};

module.exports.newOrders = function(request, response) {
  return response.send(data["new_orders"]);
};

module.exports.tickets = function(request, response) {
  return response.send(data["tickets"]);
};

function loadCsv() {
  const csv = fs.readFileSync("./server/data.csv", "utf8");
  console.log(csv);
  const lines = csv.split("\n");
  const fields = lines[0].split(",");
  const values = lines[1].split(","); 
  const data = {};
  fields.forEach((field, index) => {
    data[field] = values[index];
  });
  return data;
}