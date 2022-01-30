const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const emailSchema = new Schema({
    sender : {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    recipient : {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    subject : {
        type: String,
        minlength: 1,
        maxlength: 70,
    },
    emailbody : {
        type: String,
        required: true,
    },
    sentDate : {
        type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
    },
})

const Email = model('Email', emailSchema);

module.exports = Email;