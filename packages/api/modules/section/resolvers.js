/* eslint-disable no-unused-vars */

const findAllSections = require('../../controller/section/findSections');
const findSection = require('../../controller/section/findSection');
const createSection = require('../../controller/section/createSection');
const updateSection = require('../../controller/section/updateSection');
const updateSectionOrder = require('../../controller/section/updateSectionOrder');
const deleteSection = require('../../controller/section/deleteSection');

const resolvers = {

  Query: {

    // Gets Sections based on Proposal ID
    Sections: async (_, { id }, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await findAllSections(id);
      return dbresponse;
    },

    // Gets a Section based on Section ID
    Section: async (_, { id }, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await findSection(id);
      return dbresponse;
    },

  },

  // Root Mutations
  Mutation: {

    addSection: async (_, section, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await createSection(section);
      return (dbresponse);
    },

    updateSection: async (_, section, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await updateSection(section);
      return (dbresponse);
    },

    updateSectionOrder: async (_, { data }, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const { parentId, from, to } = data;
      const dbresponse = await updateSectionOrder(parentId, from, to);
      return (dbresponse);
    },

    deleteSection: async (_, section, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await deleteSection(section);
      return dbresponse;
    },
  },
};

module.exports = resolvers;
