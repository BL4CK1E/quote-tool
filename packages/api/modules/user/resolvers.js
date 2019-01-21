const authoriseUser = require('../../controller/user/authoriseUser');
const createUser = require('../../controller/user/createUser');

const resolvers = {
  Mutation: {

    authoriseUser: async (_, data, { res }) => {
      const { token, authorisedUser } = await authoriseUser(data);
      res.cookie('auth', token, { maxAge: 900000, httpOnly: true });
      return (authorisedUser);
    },

    registerUser: async (_, { data }) => {
      const dbresponse = await createUser(data);
      return (dbresponse);
    },

  },
};

module.exports = resolvers;
