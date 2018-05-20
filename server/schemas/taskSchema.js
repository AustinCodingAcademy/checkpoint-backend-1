const mon = require('mongoose')

const schema = new mon.Schema({
  "task":{
    required: true,
    type: String
  },
  "date":{
    required: true,
    type: Date
  }
})

module.exports = schema