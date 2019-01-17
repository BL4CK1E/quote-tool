/* eslint-disable no-unused-vars */

// Proposal Controller Imports
const findAllProposals = require('../controller/proposal/findAllProposals');
const findProposal = require('../controller/proposal/findProposal');
const createProposal = require('../controller/proposal/createProposal');
const updateProposal = require('../controller/proposal/updateProposal');
const deleteProposal = require('../controller/proposal/deleteProposal');

// Section Controller Imports
const findAllSections = require('../controller/proposal/section/findSections');
const findSection = require('../controller/proposal/section/findSection');
const createSection = require('../controller/proposal/section/createSection');
const updateSection = require('../controller/proposal/section/updateSection');
const updateSectionOrder = require('../controller/proposal/section/updateSectionOrder');
const deleteSection = require('../controller/proposal/section/deleteSection');

// Product Controller Imports
const findAllProducts = require('../controller/product/findAllProducts');
const findProduct = require('../controller/product/findProduct');
const createProducts = require('../controller/product/createProducts');
const updateProduct = require('../controller/product/updateProduct');


const resolvers = {

  // Root Queries
  Query: {

    // Gets Proposals
    Proposals: async (root, args, context) => {
      const dbresponse = await findAllProposals();
      return dbresponse;
    },

    // Gets Proposals
    Proposal: async (root, { id }, context) => {
      const dbresponse = await findProposal(id);
      return dbresponse;
    },

    // Gets Sections based on Proposal ID
    Sections: async (root, { id }, context) => {
      const dbresponse = await findAllSections(id);
      return dbresponse;
    },

    // Gets a Section based on Section ID
    Section: async (root, { id }, context) => {
      const dbresponse = await findSection(id);
      return dbresponse;
    },

    // Gets Products
    Products: async (root, { status }, context) => {
      const dbresponse = await findAllProducts(status);
      return dbresponse;
    },

    // Gets Product
    Product: async (root, { id, status }, context) => {
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
    addProposal: async (root, proposal, context) => {
      const dbrespones = await createProposal(proposal);
      return dbrespones;
    },

    // Update Proposal
    updateProposal: async (root, proposal, context) => {
      const dbrespones = await updateProposal(proposal);
      return dbrespones;
    },

    // Delete Proposal
    deleteProposal: async (root, proposal, context) => {
      const dbrespones = await deleteProposal(proposal);
      return dbrespones;
    },

    // Add Section
    addSection: async (root, section, context) => {
      const dbresponse = await createSection(section);
      return (dbresponse);
    },

    // Update Section
    updateSection: async (root, section, context) => {
      const dbresponse = await updateSection(section);
      return (dbresponse);
    },

    // Update Section
    updateSectionOrder: async (root, { data }, context) => {
      const { parentId, from, to } = data;
      const dbresponse = await updateSectionOrder(parentId, from, to);
      return (dbresponse);
    },

    // Delete Proposal
    deleteSection: async (root, section, context) => {
      const dbresponse = await deleteSection(section);
      return dbresponse;
    },

    // Add Product or Multiple Products
    addProducts: async (root, { products }, context) => {
      const dbresponse = await createProducts(products);
      return dbresponse;
    },

    // Update Product
    updateProduct: async (root, { product }, context) => {
      const dbresponse = await updateProduct(product);
      return (dbresponse);
    },

  },

};

module.exports = resolvers;
