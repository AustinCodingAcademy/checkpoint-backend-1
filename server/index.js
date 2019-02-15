const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const app = express();

mongoose.connect('mongodb://drisser:DJR390@ds161764.mlab.com:61764/your-project', {useNewUrlParser: true});

app.use(bodyParser.json());

app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages", err);
 });