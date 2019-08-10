const MongoClient = require('mongodb').MongoClient;

let db = null;

exports.connect = function(done){
    const url = 'mongodb+srv://daniela-idara:936F2Q4YrPFK5HC9@cluster0-2gqfc.mongodb.net/test?retryWrites=true&w=majority';
    const client = new MongoClient(url);

    client.connect(doStuffAfterConnected, { useNewUrlParser: true });

   
    function doStuffAfterConnected(err){
        if(err){
            console.log(err);
            return;
        }
        console.log("Connected successfully to server database");
        db = client.db("checkpoint");
        if(done){
            done();
        }
    }
}

exports.getDatabase = function() {
    return db;
}