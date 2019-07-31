const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();

//connect to database goes here:


app.use(bodyParser.json());



app.listen(3001, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages", err);
});
