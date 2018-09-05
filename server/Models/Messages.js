/*id: 1,
    name: "Lotti Huikerby",
    date: "2/6/2017",
    message: "Synchronised grid-enabled adapter"*/




let mongoose = require ("mongoose");

const Schema = new mongoose.Schema({
    id:{
        required: true,
        type: number
    },
  name:{
      required: true,
      type: string 
    },
  date: {
      required: true,
      type: string
    },
  message:{
      type: string
    },


});
module.exports = mongoose.model("message",schema);