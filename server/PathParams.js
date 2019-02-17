const Message = require('./Models/MessageModel');
const Order = require('./Models/OrderModel');
const Task = require('./Models/TaskModel');

const pathModelPair = {
    tasks: Task,
    orders: Order,
    messages: Message
}

module.exports = pathModelPair;