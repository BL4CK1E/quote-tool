import gql from 'graphql-tag';

export const GET_CURRENT_USER = gql`
  query {
    findUser {
      id
      username
      email
      firstName
      lastName
      auth
      status
    }
  }
`;

export const GET_CURRENT_USER_OPTIONS = {
  props: ({ data: { findUser } }) => ({
    findUser
  })
};
