var Order = require("../models/OrderModel");
var queryHelper = require("../queryhelpers/QueryHelper");
var numberOfOrders = 0;



exports.list = function list(request, response) {
    queryHelper.getRecords(Order, (result) => {
        numberOfOrders = result.length;
        return response.json(result);
    });
}

exports.create = function create(request, response) {  
    let tempBody = request.body;
    tempBody["id"] = numberOfOrders + 1;
    let tempRecord = new Order(tempBody);
    tempRecord.save();
    exports.list;
    return response.json(tempRecord);
}
