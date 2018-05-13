const mon = require('mongoose')

const schema = new mon.Schema({
  "orderDate":{
    required: true,
    type: Date
  },
  "orderTime":{
    required: true,
    type: Date
  },
  "amount":{
    required: true,
    type: Number
  }
})

module.exports = schema