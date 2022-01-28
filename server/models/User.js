const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    firstName : {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    lastName : {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    sentEmails: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Email',
        },
    ],
    receivedEmails: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Email',
        },
    ],
})

const User = model('User', userSchema);

module.exports = User;