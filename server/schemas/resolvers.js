const { Email, User } = require('../models')

const resolvers = {
    Query : {
        users : async () => {
            return await User.find({}).populate('sentEmails').populate('receivedEmails');
        },
        emails : async () => {
            return await Email.find().sort({ sentDate: -1 });
        },
    },
    Mutation : {
        addemail : async (parent, {sender, recipient, subject, emailbody}) => {
            const newemail = await Email.create({ sender, recipient, subject, emailbody});

            await User.findOneAndUpdate(
                { email: newemail.sender },
                { $addToSet : { sentEmails: newemail._id }}
            )

            await User.findOneAndUpdate(
                { email: newemail.recipient },
                { $addToSet : { receivedEmails: newemail._id }}
            )

            return newemail
        },
        addUser: async (parent, { firstName , lastName , email, password }) => {
            const user = await User.create({ firstName , lastName , email, password }, {new: true})
        },
    }
};

module.exports = resolvers

