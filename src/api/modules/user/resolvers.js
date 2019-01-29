const {
  MS_VARIABLES: { PROPOSIFY_MS_AUTH }
} = require("../../config/config");
const axios = require("axios");
const findUser = require("../shared/findUser");

const resolvers = {
  Query: {
    findUser: async (_, __, { user }) => {
      if (user === null) throw new Error("Not Authorised!");
      const response = await findUser(user);
      return response;
    }
  },

  Mutation: {
    authoriseUser: async (_, data, { res }) => {
      const { token, authorisedUser } = await axios
        .post(`${PROPOSIFY_MS_AUTH}/auth/login`, data)
        .then(res => res.data);
      res.cookie("auth", token, { maxAge: 604800000, httpOnly: true });
      return authorisedUser;
    },

    deauthoriseUser: async (_, __, { res }, { cookies: { auth } }) => {
      const response = await axios
        .post(`${PROPOSIFY_MS_AUTH}/auth/logout`, auth)
        .then(res => res.data);
      res.clearCookie("auth", auth, {
        maxAge: 900000,
        httpOnly: true
      });
      return response;
    },

    registerUser: async (_, { data }) => {
      console.log(data);
      const dbresponse = await axios
        .post(`${PROPOSIFY_MS_AUTH}/user/create`, data)
        .then(res => res.data);
      return dbresponse;
    }
  }
};

module.exports = resolvers;
