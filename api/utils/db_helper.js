'use strict'

//DB connection
// =============================================================================
var mongoose = require('mongoose');
var uri = 'mongodb://heroku_w2cbbjsh:2djh1a5v0qmqk3t5at2ec2l2m4@ds143132.mlab.com:43132/heroku_w2cbbjsh';

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