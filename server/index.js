let express = require("express");
let {connect} = require("./database");

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

connect(()=>{
    //start web server
  });
  

const thePort = 3001;
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
