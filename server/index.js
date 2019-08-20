let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://alaynapuck28:horseshoe2@cluster0-3umzc.mongodb.net/checkpoint1",
  { useNewUrlParser: true }
);
//routes
app.use(bodyParser.json());
app.use(express.static("public"));

let dataRoutes = require("./routes/dataRoutes");
let foxRoutes = require("./routes/foxRoutes");
let messageRoutes = require("./routes/messageRoutes");

app.use(dataRoutes);
// app.use("/tasks", taskRoutes)
// app.use("/orders", orderRoutes)
app.use("/messages", messageRoutes);
app.use("/foxes", foxRoutes);

app.listen(3000, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages on port", 3000);
});
