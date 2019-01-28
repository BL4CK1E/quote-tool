import { GET_LOADING_STATE } from '../modules/loading';

const resolvers = {
  Mutation: {
    setLoadingState: (_, { state }, { cache }) => {
      const loadingState = cache.readQuery({ GET_LOADING_STATE });
      const newState = { ...loadingState };
      newState.state = state;
      cache.writeQuery(GET_LOADING_STATE, { newState });
      return null;
    }
  }
};

export default resolvers;
