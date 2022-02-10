import { gql } from '@apollo/client';

export const QUERY_INBOX = gql`
  query inbox {
  inbox {
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
  query chat {
  sent(senderid:"61fee5e40959931fcc0b3039", recipientid:"61fee5e40959931fcc0b303a"){
    sender{
      firstName
      lastName
      email
    }
    sentDate
    emailbody
    subject
    
  }
  recieved(senderid:"61fee5e40959931fcc0b303a", recipientid:"61fee5e40959931fcc0b3039"){
    recipient{
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