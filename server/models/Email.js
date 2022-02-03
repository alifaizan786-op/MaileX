const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const emailSchema = new Schema({
    sender : {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    recipient : {
        type: Schema.Types.ObjectId,
        ref: 'User',
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