const mon = require('mongoose');

const schema = new mon.Schema({
    task: {
        type: String
    },
    date: {
        type: String
    },


});

 
module.exports = mon.model('Task', schema);