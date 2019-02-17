const pathModelPair = require('../PathParams');

exports.list=  function list(request, response) {
    const getModel = request.params.path;

    if(pathModelPair[getModel] !== undefined) {
        const query = pathModelPair[getModel].find();
        query.exec((err, models) => {
            if (err) return console.error(err);
            return response.json(models);
        }) 
    } else {
        response.end();
    }    
}

exports.show = function show(request, response) {
    const getModel = request.params.path;
    const getId = request.params.id

    if(pathModelPair[getModel] !== undefined) {
        pathModelPair[getModel].findById(getId, (err, models) => {
            return response.json(models);
        })
    } else {
        response.end();
    }
}

exports.create =  function create(request, response) {
    const getModel = request.params.path;
    const newInfo = request.body;
    const newModel = pathModelPair[getModel];

    if(newModel !== undefined) {
        const newContact = new newModel(newInfo);
        newContact.save((err, models) => {
            if (err) return console.error(err);
            return response.json(models);
        })
    }
}

