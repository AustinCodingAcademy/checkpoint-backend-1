let express = require("express")
const app = express();

app.use(express.static('./public'))//serve to local page

app.listen(3000)