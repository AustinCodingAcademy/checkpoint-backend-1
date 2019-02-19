const fs = require('fs')
fs.readFile("inventory.csv", 'utf8', function (err, data) {
 var allProducts = data.split(/\r?\n/); 
 
})
