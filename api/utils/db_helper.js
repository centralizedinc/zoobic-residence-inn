'use strict'

//DB connection
// =============================================================================
var mongoose = require('mongoose');
var uri = 'mongodb://heroku_w2cbbjsh:2djh1a5v0qmqk3t5at2ec2l2m4@ds143132.mlab.com:43132/heroku_w2cbbjsh';
var token = 'EAAbjrk6a2QYBAJ77WDfpz7qYJ3heTbw3XIj680S6lRlhlsWdZBrli8uChmK3mo9BquPf9iFLjWrkqMPyCefmeIRf7Qf1XS0mP2gwjGylcXGGkZBKQaGvQfi8NpnljkQD2Q2hSSr0qn3RWAgOuFW2FXjLwZCZBhZCKMHYhdvf2LAZDZD';

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