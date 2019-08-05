'use strict'

//DB connection
// =============================================================================
var mongoose = require('mongoose');
var uri = 'mongodb://heroku_w2cbbjsh:2djh1a5v0qmqk3t5at2ec2l2m4@ds143132.mlab.com:43132/heroku_w2cbbjsh';
var token = 'EAAbjrk6a2QYBAIDU8xonubZAroAZA9kqZAqjzHZCwxfYikEdsLjnyFhK5VinWGfaywbjUhVFCZBMwpAjSJ7nicc6IFFlW2cLQ7KT6alkHkRCZA4iyYY1ZCJXvVSgKmq1REMEmGbzjkZCnQX1W4ohGqZBzMbKGs7PBYOwn0ME6AsGSrxkoeFR4ONBt';

mongoose.Promise = require('bluebird');

function connect(){
    mongoose.connect(process.env.MONGODB_URI || uri, { useMongoClient: true, promiseLibrary: require('bluebird') })
    .then(() =>  console.log('connection succesful'))
    .catch((err) => console.error(err));
}

exports.getToken = function () {
    return token;
    // return process.env.FB_PAGE_TOKEN;
  };

module.exports = {
    connect: connect,
    db : mongoose
};