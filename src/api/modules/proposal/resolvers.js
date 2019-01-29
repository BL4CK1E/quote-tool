/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */

const findAllProposals = require("../../controller/proposal/findAllProposals");
const findProposal = require("../../controller/proposal/findProposal");
const createProposal = require("../../controller/proposal/createProposal");
const updateProposal = require("../../controller/proposal/updateProposal");
const deleteProposal = require("../../controller/proposal/deleteProposal");

const findAllSections = require("../../controller/section/findSections");

const findUser = require("../shared/findUser");

const resolvers = {
  Query: {
    // Find All Proposals
    Proposals: async (_, __, { user }) => {
      if (user === null) throw new Error("Not Authorised!");
      const dbresponse = await findAllProposals();
      return dbresponse;
    },

    // Find One Proposal
    Proposal: async (_, { id }, { user }) => {
      if (user === null) throw new Error("Not Authorised!");
      const dbresponse = await findProposal(id);
      return dbresponse;
    }
  },

  // Proposal Child Queries
  Proposal: {
    // Gets Sections based on Parent Proposal ID
    sections: async ({ id }, { user }) => {
      if (user === null) throw new Error("Not Authorised!");
      const dbresponse = await findAllSections(id);
      return dbresponse;
    },

    owner: async ({ owner }, { user }) => {
      if (user === null) throw new Error("Not Authorised!");
      const response = await findUser(owner);
      return response;
    }
  },

  Mutation: {
    // Create One Proposal
    addProposal: async (_, proposal, { user }) => {
      if (user === null) throw new Error("Not Authorised!");
      const dbrespones = await createProposal(proposal);
      return dbrespones;
    },

    // Update Proposal
    updateProposal: async (_, proposal, { user }) => {
      if (user === null) throw new Error("Not Authorised!");
      const dbrespones = await updateProposal(proposal);
      return dbrespones;
    },

    // Delete Proposal
    deleteProposal: async (_, proposal, { user }) => {
      if (user === null) throw new Error("Not Authorised!");
      const dbrespones = await deleteProposal(proposal);
      return dbrespones;
    }
  }
};

module.exports = resolvers;
