const csvFilePath = "./data.csv";
const csv = require('csvtojson');

module.exports = csv() 
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
    return jsonObj;
});