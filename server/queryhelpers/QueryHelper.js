function getRecords(SchemaToUse, done) {
    SchemaToUse.find(function(err, records) {
        if (err)
            return console.log(err);
        numberOfComments = records.length;
        done(records);    
    });
}

module.exports.getRecords = getRecords;
