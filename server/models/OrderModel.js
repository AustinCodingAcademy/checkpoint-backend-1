const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  orderDate: {
    required: true,
    type: String
  },
  orderTime: {
    required: true,
    type: String
  },
  amount: {
    required: true,
    type: String
  },
});

module.exports = mongoose.model("Order", schema);