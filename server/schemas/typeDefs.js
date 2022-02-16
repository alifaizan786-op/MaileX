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
        sender : User
        recipient : User
        subject : String
        emailbody : String
        sentDate : String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users : [User]
        emails : [Email]
        inbox : [Email]
        sentbox : [Email]
        profile (userid: ID): User
        sent (otherperson:ID): [Email]
        recieved (otherperson:ID): [Email]
        deletefrminbox (emailId : ID) : Email
    }

    type Mutation {
        addemail( recipientemail: String!, subject: String , emailbody: String!): Email
        addUser(firstName: String!, lastName: String!, email: String!, password: String! ): Auth
        login(email: String!, password: String!): Auth
    }
`;

    module.exports = typeDefs;