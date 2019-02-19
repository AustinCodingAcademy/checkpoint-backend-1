const mon = require('mongoose')

const schema = new mon.Schema({
    name: {
        type: String
    },
    date: {
        type: String
    },
    message: {
        type: String
    },

});

module.exports = mon.model('Message', schema);
