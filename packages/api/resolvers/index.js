// Proposal Controller Imports
const findAllProposals = require('../controller/proposal/findAllProposals')
const findProposal = require('../controller/proposal/findProposal')
const createProposal = require('../controller/proposal/createProposal')
const updateProposal = require('../controller/proposal/updateProposal')
const deleteProposal = require('../controller/proposal/deleteProposal')

// Section Controller Imports
const findAllSections = require('../controller/proposal/section/findSections')
const findSection = require('../controller/proposal/section/findSection')
const createSection = require('../controller/proposal/section/createSection')
const updateSection = require('../controller/proposal/section/updateSection')
const deleteSection = require('../controller/proposal/section/deleteSection')

// Product Controller Imports
const findAllProducts = require('../controller/product/findAllProducts')
const findProduct = require('../controller/product/findProduct')
const createProducts = require('../controller/product/createProducts')
const updateProduct = require('../controller/product/updateProduct')


const resolvers = {

  // Root Queries
  Query: {

    // Gets Proposals
    Proposals : async (root, args, context) => {
      let db_response = await findAllProposals()
      return db_response
    },

    // Gets Proposals
    Proposal : async (root, { id }, context) => {
      let db_response = await findProposal(id)
      return db_response
    },

    // Gets Sections based on Proposal ID
    Sections : async (root, { id }, context) => {
      let db_response = await findAllSections(id)
      return db_response
    },

    // Gets a Section based on Section ID
    Section : async (root, { id }, context) => {
      let db_response = await findSection(id)
      return db_response
    },

    // Gets Products
    Products: async (root, { status }, context) => {
      let db_response = await findAllProducts(status)
      return db_response
    },

    // Gets Product
    Product : async (root, { id, status}, context) => {
      let db_response = await findProduct(id, status)
      return db_response
    }

  },

  // Proposal Child Queries
  Proposal : {

    // Gets Sections based on Parent Proposal ID
    sections: async ( { id } ) => {
      let db_response = await findAllSections(id)
      return db_response
    }

  },

  // Root Mutations
  Mutation : {

    // Create One Proposal
    addProposal: async (root, proposal, context) => {
      let db_respones = await createProposal(proposal)
      return db_respones
    },

    // Update Proposal
    updateProposal: async (root, proposal, context) => {
      let db_respones = await updateProposal(proposal)
      return db_respones
    },

    // Delete Proposal
    deleteProposal: async (root, proposal, context) => {
      let db_respones = await deleteProposal(proposal)
      return db_respones
    },

    // Add Section
    addSection: async (root, section, context) => {
      let db_response = await createSection(section)
      return(db_response)
    },

    // Update Section
    updateSection: async (root, section, context) => {
      let db_response = await updateSection(section)
      return(db_response)
    },

    // Delete Proposal
    deleteSection: async (root, section, context) => {
      let db_response = await deleteSection(section)
      return db_response
    },

    // Add Product or Multiple Products
    addProducts: async (root, { products }, context) => {
      let db_response = await createProducts(products)
      return db_response
    },

    // Update Product
    updateProduct: async (root, { product }, context) => {
      let db_response = await updateProduct(product)
      return(db_response)
    },

  }

};

module.exports = resolvers;