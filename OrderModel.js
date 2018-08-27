let mongoose = require("mongoose");

/** example of one of the order objects
{
    id: 1,
    orderDate: "9/19/2016",
    orderTime: "6:44 AM",
    amount: "$674.65"
}
 */

const orderSchema = new mongoose.Schema({
    orderDate: {
        required: true,
        type: String
    },
    orderTime: {
        required: true,
        type: String
    },
    amount: {
        required: true,
        type: String
    }
});

module.exports =  mongoose.model("Order", orderSchema); // Mongoose will convert this to "orders" to correspond with the appropriate collection in the db
