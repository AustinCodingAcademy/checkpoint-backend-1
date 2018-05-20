const mon = require('mongoose')

const schema = require('../schemas/messageSchema')

module.exports = mon.model('Message',schema)