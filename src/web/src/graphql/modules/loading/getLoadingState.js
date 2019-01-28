import gql from 'graphql-tag';

// Read Local State (Global Loading State)
export const GET_LOADING_STATE = gql`
  {
    getLoadingState @client {
      state
    }
  }
`;

// Options for the Get State Query
export const GET_LOADING_STATE_OPTIONS = {
  props: ({ data: { getLoadingState } }) => ({
    getLoadingState
  })
};

// Update Local State (Global Loading State)
export const SET_LOADING_STATE = gql`
  mutation setLoadingState($state: Boolean!) {
    setLoadingState(state: $state) @client {
      state
    }
  }
`;
