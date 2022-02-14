import { gql } from '@apollo/client';

export const QUERY_INBOX = gql`
  query inbox {
  inbox {
    _id
    sender{
      _id
      firstName
      lastName
      email
    }
    subject
    emailbody
    sentDate
  }
  }
`;

export const QUERY_SENTBOX = gql`
  query sentbox {
  sentbox {
    recipient{
      firstName
      lastName
      email
    }
    subject
    emailbody
    sentDate
  }
  }
`;

export const QUERY_PROFILE = gql `
  query profile {
    profile {
      _id
      firstName
      lastName
      email
      password
    }
  }
`;

export const QUERY_CHAT = gql `
  query chat($otherperson:ID) {
  sent(otherperson:$otherperson){
    sender{
      firstName
      lastName
      email
    }
    sentDate
    emailbody
    subject
    
  }
  recieved(otherperson:$otherperson){
    sender{
      firstName
      lastName
      email
    }
    sentDate
    emailbody
    subject
  }
}
`;