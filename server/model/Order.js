const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: {
    type: Number,
    required: false,
  },
  orderDate: {
    type: String,
    required: true,
  },
  orderTime: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Order", schema);
