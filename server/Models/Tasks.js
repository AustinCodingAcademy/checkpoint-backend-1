/*tasks: [{
    id: 1,
    task: "VDI",
    date: "11/4/2016"*/




let mongoose = require ("mongoose");

const Schema = new mongoose.Schema({
    id:{
        type: number
    },
  task:{
      type: string 
  },
  date: {
      type: string
 },



});
module.exports = mongoose.model("tasks",schema);