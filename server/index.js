const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require('fs');
const fetch = require("node-fetch");
app.use(bodyParser.json());
app.use(require("./routes/messageRoutes"));
app.use(require("./routes/orderRoutes"));
app.use(require("./routes/taskRoutes"));

//connect to database
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://kkannen:checkpoint@ds157599.mlab.com:57599/checkpoint1-kannen");

//gets date
app.get("/dateTime", (request, response) => {
    let date = new Date();
    response.send(date)
})

//creates an object(dataObj) with keys and values corresponding to data in data.csv
const dataObj = {};

fs.readFile("data.csv", 'utf8', function (err, data) {
 if (err) {return console.log(err);}
 const allData = data.split("\n")
 const keyArr = allData[0].trim().split(",");
 const valArr = allData[1].split(",");
 keyArr.forEach((key, i) => dataObj[key] = valArr[i]) 
});

//get number of new comments
app.get("/newComments", (request, response) => {
    response.json(dataObj["new_comments"])
});

//get number of new tasks
app.get("/newTasks", (request, response) => {
    response.json(dataObj["new_tasks"])
});

//get number of new orders
app.get("/newOrders", (request, response) => {
    response.json(dataObj["new_orders"])
});

//get number of tickets
app.get("/tickets", (request, response) => {
    response.json(dataObj["tickets"])
});

//fetch random fox picture
fetch("https://randomfox.ca/floof/")
.then(response => response.json())
.then(json => {
    app.get("/foxes", (request, response) => {
        response.json(json.image)
    })
})

//run server on port 3001
app.listen(3001, (err) => {
if (err) {return console.log("Error", err);}
console.log("server running");
});
