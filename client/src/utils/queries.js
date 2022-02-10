import { gql } from '@apollo/client';

export const QUERY_INBOX = gql`
  query inbox {
  inbox {
    sender{
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
`