const express = require('express');
const port = 3001;
const Profile = require()

const app = express();

const mongoose = require("mongoose");
// setup mongoDB connection
mongoose.Promise = global.Promise;
// connect to personal mongoDB database on mlab
mongoose.connect("mongodb://kesto:password1@ds237713.mlab.com:37713/checkpoint-backend-1");

app.listen(port, (err) => {
      if (err) {
      console.log(err);
   } else {
      console.log(`listening on port ${port}`);
   }
}) 
// route
app.use('/', (req, res) => {
   res.send('working');
})

// controller
const fnc = function(req, res) {
   Profile.find()
   .then(res => res.json())
   .then(data => res.json(data))
}

app.get('/', fnc);

