/* eslint-disable no-shadow */

import gql from 'graphql-tag';

export const getCurrentUser = gql`
  query {
    getCurrentUser @client {
     currentUser
    }
  }
`;

export const getCurrentUserOptions = ({
  props: ({ data: { getCurrentUser } }) => ({
    getCurrentUser,
  }),
});
