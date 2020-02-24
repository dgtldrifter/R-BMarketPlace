const mongodb = require('mongodb').MongoClient;
require('dotenv').config({path: '../.env'});


function submitNewUser() {
    const dbURI = "mongodb+srv://" + process.env.ATLAS_USER + ":" + process.env.ATLAS_PASSWD + "@" + process.env.ATLAS_URI;
    const mongoClient = new MongoClient(dbURI, {useNewUrlParser: true});

    mongoClient.connect(err => {
        const collection = mongoClient.db("marketplace").collection('authentication');

        mongoClient.close();
    });
}

module.exports = {
    submitNewUser: submitNewUser()
};
