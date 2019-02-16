let fs = require('fs')
let csv = require('csv-parser')

module.exports.csv = 
    fs.createReadStream('./data.csv')
    .pipe(csv())
    .on('data', (data) => {
        data.newDate = new Date()
        return data 
    })
