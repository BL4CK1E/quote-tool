import gql from 'graphql-tag';

export const GET_LOADING_STATE = gql`
  query @cache {
    isLoading {
      state
    }
  }
`;

export const GET_LOADING_STATE_OPTIONS = {
  props: ({ data: { isLoading } }) => ({
    isLoading
  })
};
