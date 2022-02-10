const { Email, User } = require('../models')
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query : {
        users : async () => {
            return await User.find({});
        },
        emails : async () => {
            return await Email.find().populate('sender').populate('recipient');
        },
        inbox : async (parent, args, context) => {
            if (context.user){
            return await Email.find( { recipient: context.user._id } ).populate('sender').sort({ sentDate: -1 });
            }
        },
        sentbox : async (parent, args, context) => {
            if (context.user){
            return await Email.find( { sender: context.user._id } ).populate('recipient').sort({ sentDate: -1 });
            }
        },
        profile : async (parent, args, context) => {
            if (context.user){
            return await User.findOne( { _id : context.user._id} )
            }
        },
        sent : async (parent, {recipientid}, context) =>{
            return await Email.find({sender:context.user._id,recipient:recipientid}).populate('sender').populate('recipient').sort({ sentDate: -1 })
        },
        recieved : async (parent, {senderid}, context) =>{
            return await Email.find({sender:senderid,recipient:context.user._id}).populate('sender').populate('recipient').sort({ sentDate: -1 })
        }
    },
    Mutation : {
        addemail : async (parent, {recipientemail, subject, emailbody}, context) => {

            ({_id : this._Rrecipient} = await User.findOne({ email: recipientemail }));
            const recipient = this._Rrecipient;

            const newemail = await Email.create({ sender: context.user._id, recipient, subject, emailbody});

            return newemail
        },
        addUser: async (parent, { firstName , lastName , email, password }) => {
            const user = await User.create({ firstName , lastName , email, password })
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No user found with this email address');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
        }
    }
};

module.exports = resolvers

// id's for faizan and jim are provided
// find where faizan is recipietn and sender is jim
// find where jim is recipient and sender is faizan

