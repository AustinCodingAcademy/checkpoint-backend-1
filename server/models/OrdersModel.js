const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: {
    require: true,
    type: Number,
  },
  orderDate: {
    required: true,
    type: String
  },
  orderTime: {
    require: true,
    type: String
  },
  amount: {
    require: true,
    type: String
  }
});

module.exports = mongoose.model("Order", schema);
