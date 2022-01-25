const { Schema, model } = require('mongoose');


const emailSchema = new Schema({
    sender : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    recipient : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    emailbody : {
        type: String,
        required: true,
    },
    sentDate : {
        type : Date,
        default: Date.now
    },
})

const Email = model('Email', emailSchema);

module.exports = Email;