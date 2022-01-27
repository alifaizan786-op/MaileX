const { Email, User } = require('../models')

const resolvers = {
    Query : {
        users : async () => {
            return await User.find({});
        },
        emails : async () => {
            return await Email.find({}).populate('user');
        }
    },
    Mutation : {
        addemail : async (parent, {sender, recipient, emailbody}) => {
            return await Email.create({ sender, recipient, emailbody });
        },
    }
};

module.exports = resolvers

