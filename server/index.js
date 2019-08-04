let express = require("express");
let bodyParser = require("body-parser");
let dataRoute = require("../routes/dataRoute");
let messagesRoute = require("../routes/messagesRoute");
let ordersRoute = require("../routes/ordersRoute");
let tasksRoute = require("../routes/tasksRoute")

let app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(dataRoute);
app.use(messagesRoute);
app.use(ordersRoute);
app.use(tasksRoute);

app.listen(3000, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is now listening for messages on port",3000);
})