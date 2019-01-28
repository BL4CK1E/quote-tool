import gql from 'graphql-tag';

export const GET_PROPOSALS = gql`
  {
    Proposals {
      id
      name
      createdAt
      company
      owner {
        id
        firstName
        lastName
      }
      status
      value
    }
  }
`;

export const GET_PROPOSALS_OPTIONS = {
  props: ({ data: { Proposals } }) => ({
    Proposals
  })
};
