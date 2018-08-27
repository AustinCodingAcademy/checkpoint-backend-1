let express =  require("express");
const router = express.Router();
let {list,create} = require( "../controllers/MessageController");
const fileSystem = require('fs');

router.get("/messages", list);
router.post("/messages", create);

fileSystem.readFile("data.csv", 'utf8', function (err, data) {//Re-visit this. Does each item need to go in different routes?
    if (err) {
        return console.log(err)
    };
     console.log(data)
});

module.exports =  router;



