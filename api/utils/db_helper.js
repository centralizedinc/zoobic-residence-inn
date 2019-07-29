'use strict'

//DB connection
// =============================================================================
var mongoose = require('mongoose');
var uri = 'mongodb://VPBelo:<password>@zoobicinn-shard-00-00-k0tbm.azure.mongodb.net:27017,zoobicinn-shard-00-01-k0tbm.azure.mongodb.net:27017,zoobicinn-shard-00-02-k0tbm.azure.mongodb.net:27017/chatbot-template-sample?ssl=true&replicaSet=ZoobicInn-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.Promise = require('bluebird');

function connect(){
    mongoose.connect(process.env.MONGODB_URI || uri, { useMongoClient: true, promiseLibrary: require('bluebird') })
    .then(() =>  console.log('connection succesful'))
    .catch((err) => console.error(err));
}

module.exports = {
    connect: connect,
    db : mongoose
};