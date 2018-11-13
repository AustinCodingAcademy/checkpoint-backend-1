
const mon = require('mongoose')

const schema = require('../schemas/taskSchema')

module.exports = mon.model('Task',schema)