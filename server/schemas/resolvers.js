const { Email, User } = require('../models')

const resolvers = {
    Query : {
        users : async () => {
            return await User.find({});
        },
        emails : async () => {
            return await Email.find().populate('sender').populate('recipient');
        },
    },
    Mutation : {
        addemail : async (parent, {senderemail, recipientemail, subject, emailbody}) => {
            ({_id : this._Ssender} = await User.findOne({ email: senderemail }));
            const sender = this._Ssender;

            ({_id : this._Rrecipient} = await User.findOne({ email: recipientemail }));
            const recipient = this._Rrecipient;

            const newemail = await Email.create({ sender, recipient, subject, emailbody});

            return newemail
        },
        addUser: async (parent, { firstName , lastName , email, password }) => {
            const user = await User.create({ firstName , lastName , email, password }, {new: true})
        },
    }
};

module.exports = resolvers

