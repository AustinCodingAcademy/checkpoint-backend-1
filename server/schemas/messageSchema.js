const mon = require('mongoose')

const schema = new mon.Schema({
  "name":{
    required: true,
    type: String,
  },
  "date":{
    required: true,
    type: Date
  },
  "message":{
    required: true,
    type: String
  }
})

module.exports = schema