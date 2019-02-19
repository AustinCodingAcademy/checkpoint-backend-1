let express = require("express");
let bodyParser = require ("bodyParser");

const app = express();
app.use(bodyParser.json());


app.listen(3001, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3001");
});

