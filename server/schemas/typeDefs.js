const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id : ID
        firstName : String
        lastName : String
        email : String
        password : String
        sentEmails: [Email]!
        receivedEmails: [Email]!
    }
    
    type Email {
        _id : ID
        sender : String
        recipient : String
        emailbody : String
        sentDate : String
    }

    type Query {
        users : [User]
        user(email: String!): User
        emails : [Email]
        email(sender: String!) : Email
    }

    type Mutation {
        addemail(sender: String!, recipient: String!, subject: String , emailbody: String!): Email
        addUser(firstName: String!, lastName: String!, email: String!, password: String! ): User
    }
`;

module.exports = typeDefs;