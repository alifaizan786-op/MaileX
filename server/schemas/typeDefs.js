const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id : ID
        firstName : String
        lastName : String
        email : String
        password : String
    }
    
    type Email {
        _id : ID
        sender : [User]
        recipient : [User]
        emailbody : String
        sentDate : String
    }

    type Query {
        users : [User]
        emails : [Email]
    }

    type Mutation {
        addemail(sender: ID!, recipient: ID!, emailbody: String!): Email
    }
`;

module.exports = typeDefs;