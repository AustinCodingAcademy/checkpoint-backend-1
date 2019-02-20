const express = require("express");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://melfuechec:bucket123@ds141952.mlab.com:41952/checkpoint-1", {useNewUrlParser: true});
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.listen(3001, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages", err);
});
