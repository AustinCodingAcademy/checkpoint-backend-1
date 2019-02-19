const csv = require('fast-csv');
const express = require('express');
const fs = require('fs')
const parser = require('body-parser');
const mongoose = require('mongoose');
const fetch = require('node-fetch');

const db = mongoose.connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://DB_1:juan_23@ds149495.mlab.com:49495/express_study', {
useNewUrlParser: true
});



db.on('error', console.error.bind(console, 'connection-error:'));
db.once('open', () => console.log('Connected to DB'));

csv
    .fromPath("./data.csv")
    .on("data", function (data) {
        console.log(data);
    })
    .on("end", function () {
        console.log("done");
    });


// express 
const app = express();

//depricated
//app.use(parser.json());
app.use(parser.json({
    extended: true
}));


app.get('/dateTime', (req, res) => res.send( Date()));

fs.readFile('./data.csv', 'utf8', (err, data) => {
    if (err) throw err;
    const dataSent = data.split('\n');
    const dataNums = dataSent[1].split(',');
    
    app.get('/newComments', (req, res, next) => {
        res.send(dataNums[0]);
    });
    app.get('/newTasks', (req, res, next) => {
        res.send(dataNums[1]);
    });
    app.get('/newOrders', (req, res, next) => {
        res.send(dataNums[2]);
    });
    app.get('/tickets', (req, res, next) => {
        res.send(dataNums[3]);
    });
});

//connect routers
app.use(require('./routers/messageRouter'));
app.use(require('./routers/orderRouter'));
app.use(require('./routers/taskRouter'));


app.get('/foxes', (req, res) => {
    fetch('https://randomfox.ca/floof')
        .then(res => res.json())
        .then(json => {
            res.json(json.image)
        })
})

app.listen(3003, () => console.log('Listening on port 3003!'));
