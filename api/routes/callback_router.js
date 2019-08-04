'use strict'

var request = require('request');
var express = require('express');

var callback_router = express.Router();

// init helpers
var sender_helper = require('../utils/sender_helper.js');

var ChatbotResponse = require('../models/ChatbotResponse');
var service_facade = require('../services/service_facade');

var async = require('async');


callback_router.route('/book').post((req, res) => {
    var keyword = req.body.keyword;
    var sender = req.body.sender;
    var callback_params = null;

    // send messages

    console.log("CALLBACK: " + keyword + ":::" + sender)

    if (sender !== null
        && sender !== undefined
        && sender !== ""
        && keyword !== null
        && keyword !== undefined
        && keyword !== "") {
        processRequest(sender, keyword, callback_params, ()=>{
            res.sendStatus(200);
        })
    } else {
        res.sendStatus(200);
    }
});


/**
 * 
 * @description handles response formatting
 * 
 * @param {String} sender 
 * @param {String} text 
 * @param {Object} callback_params 
 * @param {Function} callback_ouput 
 */
function processRequest(sender, text, callback_params, callback_output) {
    
        var messages = [];
        ChatbotResponse.find({ postback: text })
            .sort({ 'index': 'ascending' })
            .exec((err, resp) => {
                if (typeof resp !== 'undefined' && resp.length > 0) {
                    async.forEachSeries(Object.keys(resp),
                        (itr, callback) => {
                            var reply = resp[itr];                        
                            if (reply.service) {
                                // service
                                service_facade.callService(sender, reply,
                                    (formatted_msg, array_messages) => {
                                        //service return an array of messages
                                        if (array_messages) {
                                            array_messages.forEach(array_msg => {
                                                
                                                messages.push(replaceKeywords(sender, array_msg));
                                            });
                                        } else {
                                            messages.push(replaceKeywords(sender, formatted_msg));
                                        }
                                        callback();
                                    }, callback_params)
                            } else {
                                // send message directly
                                messages.push(replaceKeywords(sender, reply.message));
                                callback();
                            }
                        }, (err) => {  
                            console.log(JSON.stringify(messages));
                            sender_helper.sendSeriesMessages(sender, messages, (status) => {
                                callback_output();
                            });
                        });
                } else {
                    // AI catch block
                    callback_output();
                }
            });
    }

/**
 * 
 * @param {Object} message 
 */
function replaceKeywords(sender, message){
    
    var message_string = JSON.stringify(message);

    message_string = message_string.replaceAll("{#sender}", sender);
    message_string = message_string.replaceAll("{#platform}", "facebook");


    return JSON.parse(message_string);
}

module.exports = callback_router;