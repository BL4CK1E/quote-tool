/* eslint-disable no-unused-vars */

const findUser = require('../../controller/user/findUser');
const authoriseUser = require('../../controller/user/authoriseUser');
const deauthoriseUser = require('../../controller/user/deauthoriseUser');
const createUser = require('../../controller/user/createUser');

const resolvers = {
  Query: {
    findUser: async (_, __, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await findUser(user);
      return dbresponse;
    }
  },

  Mutation: {
    authoriseUser: async (_, data, { res }) => {
      const { token, authorisedUser } = await authoriseUser(data);
      res.cookie('auth', token, { maxAge: 604800000, httpOnly: true });
      return authorisedUser;
    },

    deauthoriseUser: async (_, __, { res, req }) => {
      const RSReponse = await deauthoriseUser(req.cookies.auth);
      res.clearCookie('auth', req.cookies.auth, {
        maxAge: 900000,
        httpOnly: true
      });
      return RSReponse;
    },

    registerUser: async (_, { data }) => {
      const dbresponse = await createUser(data);
      return dbresponse;
    }
  }
};

module.exports = resolvers;
