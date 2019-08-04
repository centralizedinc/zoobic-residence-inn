'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReservationModelSchema = new Schema({
    reservation_details: {
        room: { type: String },
        check_in_date: { type: Date },
        check_out_date: { type: Date },
        guest: { type: Number },
        child: { type: Number }
    },
    personal_details: {
        name: { type: String },
        email: { type: String },
        confirm_email: { type: String },
        mobile: { type: Number },
        special_request: { type: String }
    },
    card: {
        type: { type: String },
        name: { type: String },
        number: { type: Number },
        expiration_date: { type: String }
    }
});


module.exports = mongoose.model('reservations', ReservationModelSchema);