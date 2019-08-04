let express = require("express");
let bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

app.listen(3000)