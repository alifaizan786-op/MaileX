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