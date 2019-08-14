
const express = require("express");
const router = express.Router();
const fs = require(`fs`);

let data = ("server/data.csv");
let info = [];

fs.readFile(data, "utf8", function (err,data) {
  if (err) {
      return console.log(err);
  }
      data = data.split("\n");
      data = data[1].split(",");
      info.push(data);
  });

  router.get('/dateTime', (req, res) => {
    let today = new Date;
    let currentTime = `${today.getHours()} : ${today.getMinutes()}`
    res.send(currentTime);
  });
  
  router.get("/newComments", (req, res) => {
    res.send(info[0][0])
  })

  router.get('/newTasks', (req, res) => {
    res.send(info[0][1]);
});

router.get('/newOrders', (req, res) => {
  res.send(info[0][2]);
});

router.get('/tickets', (req, res) => {
  res.send(info[0][3]);
});

module.exports = router;