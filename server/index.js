var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())

const mongoose = require('mongoose');
mongoose.connect('mongodb://jflores353:$T1nkyi25!@ds343895.mlab.com:43895/checkpoint1', {useNewUrlParser: true});

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello')
})

app.listen(3001);