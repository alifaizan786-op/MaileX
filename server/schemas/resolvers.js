const { Email, User } = require('../models')

const resolvers = {
    Query : {
        users : async () => {
            return await User.find({});
        },
        emails : async () => {
            return await Email.find({}).populate('users');
        }
    }
};

module.exports = resolvers

