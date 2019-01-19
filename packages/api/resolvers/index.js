/* eslint-disable no-unused-vars */

// Proposal Controller Imports
const findAllProposals = require('../controller/proposal/findAllProposals');
const findProposal = require('../controller/proposal/findProposal');
const createProposal = require('../controller/proposal/createProposal');
const updateProposal = require('../controller/proposal/updateProposal');
const deleteProposal = require('../controller/proposal/deleteProposal');

// Section Controller Imports
const findAllSections = require('../controller/section/findSections');
const findSection = require('../controller/section/findSection');
const createSection = require('../controller/section/createSection');
const updateSection = require('../controller/section/updateSection');
const updateSectionOrder = require('../controller/section/updateSectionOrder');
const deleteSection = require('../controller/section/deleteSection');

// Product Controller Imports
const findAllProducts = require('../controller/product/findAllProducts');
const findProduct = require('../controller/product/findProduct');
const createProducts = require('../controller/product/createProducts');
const updateProduct = require('../controller/product/updateProduct');

// User Controller Imports
const createUser = require('../controller/user/createUser');
const authUser = require('../controller/user/authUser');

const resolvers = {

  // Root Queries
  Query: {

    // Gets Proposals
    Proposals: async (root, args, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await findAllProposals();
      return dbresponse;
    },

    // Gets Proposals
    Proposal: async (root, { id }, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await findProposal(id);
      return dbresponse;
    },

    // Gets Sections based on Proposal ID
    Sections: async (root, { id }, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await findAllSections(id);
      return dbresponse;
    },

    // Gets a Section based on Section ID
    Section: async (root, { id }, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await findSection(id);
      return dbresponse;
    },

    // Gets Products
    Products: async (root, { status }, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await findAllProducts(status);
      return dbresponse;
    },

    // Gets Product
    Product: async (root, { id, status }, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await findProduct(id, status);
      return dbresponse;
    },

  },

  // Proposal Child Queries
  Proposal: {

    // Gets Sections based on Parent Proposal ID
    sections: async ({ id }) => {
      const dbresponse = await findAllSections(id);
      return dbresponse;
    },

  },

  // Root Mutations
  Mutation: {

    // Create One Proposal
    addProposal: async (root, proposal, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbrespones = await createProposal(proposal);
      return dbrespones;
    },

    // Update Proposal
    updateProposal: async (root, proposal, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbrespones = await updateProposal(proposal);
      return dbrespones;
    },

    // Delete Proposal
    deleteProposal: async (root, proposal, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbrespones = await deleteProposal(proposal);
      return dbrespones;
    },

    // Add Section
    addSection: async (root, section, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await createSection(section);
      return (dbresponse);
    },

    // Update Section
    updateSection: async (root, section, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await updateSection(section);
      return (dbresponse);
    },

    // Update Section
    updateSectionOrder: async (root, { data }, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const { parentId, from, to } = data;
      const dbresponse = await updateSectionOrder(parentId, from, to);
      return (dbresponse);
    },

    // Delete Proposal
    deleteSection: async (root, section, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await deleteSection(section);
      return dbresponse;
    },

    // Add Product or Multiple Products
    addProducts: async (root, { products }, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await createProducts(products);
      return dbresponse;
    },

    // Update Product
    updateProduct: async (root, { product }, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await updateProduct(product);
      return (dbresponse);
    },

    // Create User (Register)
    createUser: async (root, { data }, context) => {
      const dbresponse = await createUser(data);
      return (dbresponse);
    },

    // Auth User (Login), Sets Cookie
    authUser: async (root, data, { req, res }) => {
      const { token, authorisedUser } = await authUser(data);
      res.cookie('auth', token, { httpOnly: true });
      return (authorisedUser);
    },

  },

};

module.exports = resolvers;
