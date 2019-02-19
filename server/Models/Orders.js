/*orders: [{
    id: 1,
    orderDate: "9/19/2016",
    orderTime: "6:44 AM",
    amount: "$674.65"*/


let mongoose = require ("mongoose");

const Schema = new mongoose.Schema({
    id:{
        type: number
    },
  orderDate:{
      type: string 
  },
  orderTime: {
      type: string
 },
  amount:{
      type: string
  },


});
module.exports = mongoose.model("orders",schema);