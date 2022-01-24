const { Schema, model } = require('mongoose');


const emailSchema = new Schema({
    sender : {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    recipient : {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    emailbody : {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    sentDate : {
        type : Date,
        default: Date.now
    },
})

const Email = model('Email', emailSchema);

module.exports = Email;