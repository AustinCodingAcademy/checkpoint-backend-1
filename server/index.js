const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://check1:shelby@ds147070.mlab.com:47070/advanced-express-practice');
app.use(bodyParser.json());



const bodyParser = require('body-parser');
app.listen(3001, (err) => {
if (err) {
    return console.log('Error', err)
}
    console.log('web server live @ localhost:3001');
});