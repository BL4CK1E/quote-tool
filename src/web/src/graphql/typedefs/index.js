import gql from 'graphql-tag';

const typeDefs = gql`
  type LoadingState {
    state: Boolean
  }

  type Query {
    isLoading: LoadingState
  }
`;

export default typeDefs;
