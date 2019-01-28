import gql from "graphql-tag";

export const GET_PROPOSALS = gql`
  {
    Proposals {
      id
      name
      createdAt
    }
  }
`;

export const GET_PROPOSALS_OPTIONS = {
  props: ({ data: { Proposals } }) => ({
    Proposals
  })
};
